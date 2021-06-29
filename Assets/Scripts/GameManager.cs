using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    [SerializeField] Transform xLeftTerminal;
    [SerializeField] Transform xRightTerminal;
    [SerializeField] Transform zLeftTerminal;
    [SerializeField] Transform zRightTerminal;
    [SerializeField] GameObject movingCube;
    [SerializeField] GameObject baseCube;
    [SerializeField] GameObject prefabCube;

    [SerializeField] float perfectionThreshold = 0.05f;

    [SerializeField] GameObject stack;
    [SerializeField] int counterForStackShifting = 3;

    [SerializeField] GameObject stackTitleText;
    [SerializeField] GameObject tapTitleText;
    [SerializeField] AudioClip cutSfx;
    [SerializeField] GameObject restartPanel;
    [SerializeField] Text scoreText;
    [SerializeField] GameObject bestScoreText;
    [SerializeField] GameObject startScreen;
    [SerializeField] GameObject clickPanel;
    [SerializeField] AudioClip[] perfectionSfxs;

    public volatile bool isLeftRightX = false;
    public volatile bool isClickedToRun = false;
    public volatile bool isGameOver = false;
    public volatile static bool isRestart = false;

    float xMin, xMax, zMin, zMax;
    float xLeft, xRight, zLeft, zRight;

    Color color = Color.white;
    int score = 0;
    int perfectionCount = 0;

    AudioSource audioSource;

    private void Awake()
    {
        if(GameManager.instance == null)
        {
            GameManager.instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }

    // Start is called before the first frame update
    void Start()
    {
        color = ColorManager.instance.GetNextColor();
        Debug.Log("cube color: " + color);
        baseCube.GetComponent<Renderer>().material.color = color;

        audioSource = GetComponent<AudioSource>();

        if (!isRestart)
        {
            startScreen.SetActive(true);
        }
        else
        {
            SetMovingCube();
        }
    }

    public void SetMovingCube()
    {        
        if (isClickedToRun)
        {
            if (IsOverlapped())
            {                
                if (IsPerfectlyOverlapped())
                {
                    perfectionCount++;
                    if(perfectionCount <= 7)
                    {
                        audioSource.PlayOneShot(perfectionSfxs[perfectionCount - 1]);
                        CreatePerfectCube(1f);
                    }
                    else
                    {
                        audioSource.PlayOneShot(perfectionSfxs[6]);
                        if(perfectionCount == 8)
                        {
                            CreatePerfectCube(1.1f);
                        }
                        else
                        {
                            CreatePerfectCube(1f);
                        }
                        
                    }
                    
                }
                else
                {
                    Debug.Log("overlapped");
                    CreateNewCubes();
                    audioSource.PlayOneShot(cutSfx);
                    perfectionCount = 0;
                }

                score++;

                if (counterForStackShifting == 0)
                {
                    stack.transform.position = new Vector3(stack.transform.position.x, stack.transform.position.y - baseCube.transform.localScale.y, stack.transform.position.z);
                }
                else
                {
                    counterForStackShifting--;
                }
            }
            else
            {
                perfectionCount = 0;
                isGameOver = true;
                StartCoroutine(WaitToGameOver());
                // TODO: play game over tone, wait a second, reload scene
            }
        }


        if (!isGameOver)
        {
            isClickedToRun = true;
            isLeftRightX = !isLeftRightX;

            if (isLeftRightX)
            {
                movingCube.transform.localScale = baseCube.transform.localScale;
                movingCube.GetComponent<MovingCube>().left = xLeftTerminal.position.x;
                movingCube.GetComponent<MovingCube>().right = xRightTerminal.position.x;
                float y = baseCube.transform.position.y + baseCube.transform.localScale.y / 2 + movingCube.transform.localScale.y / 2;
                movingCube.transform.position = new Vector3(xLeftTerminal.position.x, y, baseCube.transform.position.z);
            }
            else
            {
                movingCube.transform.localScale = baseCube.transform.localScale;
                movingCube.GetComponent<MovingCube>().left = zLeftTerminal.position.z;
                movingCube.GetComponent<MovingCube>().right = zRightTerminal.position.z;
                float y = baseCube.transform.position.y + baseCube.transform.localScale.y / 2 + movingCube.transform.localScale.y / 2;
                movingCube.transform.position = new Vector3(baseCube.transform.position.x, y, zLeftTerminal.position.z);
            }

            color = ColorManager.instance.GetNextColor();
            Debug.Log("moving  cube color: " + color);
            movingCube.GetComponent<Renderer>().material.color = color;
            movingCube.SetActive(true);
        }

        if (isClickedToRun)
        {
            tapTitleText.SetActive(false);
            stackTitleText.GetComponent<Text>().text = score == 0 ? "" : "" + score;
        }
    }

    private IEnumerator WaitToGameOver()
    {
        Debug.Log("not overlapped, game over");

        movingCube.GetComponent<MovingCube>().speed = 0f;
        movingCube.GetComponent<Rigidbody>().isKinematic = false;
        movingCube.GetComponent<Rigidbody>().useGravity = true;
        movingCube.transform.position = movingCube.transform.position;

        yield return new WaitForSeconds(1f);

        ShowRestartPanel();
    }

    private void ShowRestartPanel()
    {
        clickPanel.SetActive(false);
        stackTitleText.GetComponent<Text>().text = "";
        scoreText.text = "Score: " + score;
        if (PlayerPrefs.HasKey("best_score"))
        {
            int bestScore = PlayerPrefs.GetInt("best_score");
            if(score > bestScore)
            {
                PlayerPrefs.SetInt("best_score", score);
                PlayerPrefs.Save();
            }

            bestScoreText.GetComponent<Text>().text = "Best Score: " + PlayerPrefs.GetInt("best_score");
        }
        else
        {
            bestScoreText.SetActive(false);
            PlayerPrefs.SetInt("best_score", score);
            PlayerPrefs.Save();
        }

        restartPanel.SetActive(true);

        ZoomOut();
    }

    private void ZoomOut()
    {
        
    }

    bool IsOverlapped()
    {
        if (isLeftRightX)
        {
            xMin = baseCube.transform.position.x - baseCube.transform.localScale.x/2;
            xMax = baseCube.transform.position.x + baseCube.transform.localScale.x/2;
            xLeft = movingCube.transform.position.x - movingCube.transform.localScale.x/2;
            xRight = movingCube.transform.position.x + movingCube.transform.localScale.x/2;
            
            if((xLeft >= xMin && xLeft <= xMax) || (xRight >= xMin && xRight <= xMax))
            {
                return true;
            }
        }
        else
        {
            zMin = baseCube.transform.position.z - baseCube.transform.localScale.z/2;
            zMax = baseCube.transform.position.z + baseCube.transform.localScale.z/2;
            zLeft = movingCube.transform.position.z - movingCube.transform.localScale.z/2;
            zRight = movingCube.transform.position.z + movingCube.transform.localScale.z/2;
            
            if ((zLeft >= zMin && zLeft <= zMax) || (zRight >= zMin && zRight <= zMax))
            {
                return true;
            }
        }

        return false;
    }

    bool IsPerfectlyOverlapped()
    {
        if (isLeftRightX)
        {
            if(Mathf.Abs(xMin - xLeft) <= perfectionThreshold)
            {
                return true;
            }
        }
        else
        {
            if(Mathf.Abs(zMin - zLeft) <= perfectionThreshold)
            {
                return true;
            }
        }
        return false;
    }

    void CreateNewCubes()
    {
        if (isLeftRightX)
        {
            if(xLeft > xMin)
            {
                float xDist = Mathf.Abs(baseCube.transform.position.x - movingCube.transform.position.x);
                float newBaseCubeXScale = movingCube.transform.localScale.x - xDist;
                float newTruncatedCubeXScale = xDist;
                float newBaseCubeXPos = movingCube.transform.position.x - xDist / 2;
                float newTruncatedCubeXPos = movingCube.transform.position.x + xDist;

                GameObject newBaseCube = Instantiate(prefabCube, new Vector3(newBaseCubeXPos, movingCube.transform.position.y, movingCube.transform.position.z), Quaternion.identity);
                newBaseCube.transform.localScale = new Vector3(newBaseCubeXScale, movingCube.transform.localScale.y, movingCube.transform.localScale.z);
                newBaseCube.GetComponent<Rigidbody>().isKinematic = true;
                newBaseCube.GetComponent<Renderer>().material.color = color;

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(newTruncatedCubeXPos, movingCube.transform.position.y, movingCube.transform.position.z), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(newTruncatedCubeXScale, movingCube.transform.localScale.y, movingCube.transform.localScale.z);
                truncatedCube.tag = "DroppingCube";
                truncatedCube.GetComponent<Renderer>().material.color = color;

                newBaseCube.transform.parent = baseCube.transform.parent;
                baseCube = newBaseCube;
            }
            else if(xRight < xMax)
            {
                float xDist = Mathf.Abs(baseCube.transform.position.x - movingCube.transform.position.x);
                float newBaseCubeXScale = movingCube.transform.localScale.x - xDist;
                float newTruncatedCubeXScale = xDist;
                float newBaseCubeXPos = movingCube.transform.position.x + xDist / 2;
                float newTruncatedCubeXPos = movingCube.transform.position.x - xDist;

                GameObject newBaseCube = Instantiate(prefabCube, new Vector3(newBaseCubeXPos, movingCube.transform.position.y, movingCube.transform.position.z), Quaternion.identity);
                newBaseCube.transform.localScale = new Vector3(newBaseCubeXScale, movingCube.transform.localScale.y, movingCube.transform.localScale.z);
                newBaseCube.GetComponent<Rigidbody>().isKinematic = true;
                newBaseCube.GetComponent<Renderer>().material.color = color;

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(newTruncatedCubeXPos, movingCube.transform.position.y, movingCube.transform.position.z), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(newTruncatedCubeXScale, movingCube.transform.localScale.y, movingCube.transform.localScale.z);
                truncatedCube.tag = "DroppingCube";
                truncatedCube.GetComponent<Renderer>().material.color = color;

                newBaseCube.transform.parent = baseCube.transform.parent;
                baseCube = newBaseCube;
            }
        }
        else
        {
            if(zLeft > zMin)
            {
                float zDist = Mathf.Abs(baseCube.transform.position.z - movingCube.transform.position.z);
                float newBaseCubeZScale = movingCube.transform.localScale.z - zDist;
                float newTruncatedCubeZScale = zDist;
                float newBaseCubeZPos = movingCube.transform.position.z - zDist / 2;
                float newTruncatedCubeZPos = movingCube.transform.position.z + zDist;

                GameObject newBaseCube = Instantiate(prefabCube, new Vector3(movingCube.transform.position.x, movingCube.transform.position.y, newBaseCubeZPos), Quaternion.identity);
                newBaseCube.transform.localScale = new Vector3(movingCube.transform.localScale.x, movingCube.transform.localScale.y, newBaseCubeZScale);
                newBaseCube.GetComponent<Rigidbody>().isKinematic = true;
                newBaseCube.GetComponent<Renderer>().material.color = color;

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(movingCube.transform.position.x, movingCube.transform.position.y, newTruncatedCubeZPos), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(movingCube.transform.localScale.x, movingCube.transform.localScale.y, newTruncatedCubeZScale);
                truncatedCube.tag = "DroppingCube";
                truncatedCube.GetComponent<Renderer>().material.color = color;

                newBaseCube.transform.parent = baseCube.transform.parent;
                baseCube = newBaseCube;
            }
            else if(zRight < zMax)
            {
                float zDist = Mathf.Abs(baseCube.transform.position.z - movingCube.transform.position.z);
                float newBaseCubeZScale = movingCube.transform.localScale.z - zDist;
                float newTruncatedCubeZScale = zDist;
                float newBaseCubeZPos = movingCube.transform.position.z + zDist / 2;
                float newTruncatedCubeZPos = movingCube.transform.position.z - zDist;

                GameObject newBaseCube = Instantiate(prefabCube, new Vector3(movingCube.transform.position.x, movingCube.transform.position.y, newBaseCubeZPos), Quaternion.identity);
                newBaseCube.transform.localScale = new Vector3(movingCube.transform.localScale.x, movingCube.transform.localScale.y, newBaseCubeZScale);
                newBaseCube.GetComponent<Rigidbody>().isKinematic = true;
                newBaseCube.GetComponent<Renderer>().material.color = color;

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(movingCube.transform.position.x, movingCube.transform.position.y, newTruncatedCubeZPos), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(movingCube.transform.localScale.x, movingCube.transform.localScale.y, newTruncatedCubeZScale);
                truncatedCube.tag = "DroppingCube";
                truncatedCube.GetComponent<Renderer>().material.color = color;

                newBaseCube.transform.parent = baseCube.transform.parent;
                baseCube = newBaseCube;
            }
        }
    }

    private void CreatePerfectCube(float scale)
    {
        GameObject newBaseCube = Instantiate(prefabCube, movingCube.transform.position, Quaternion.identity);
        newBaseCube.transform.localScale = new Vector3(movingCube.transform.localScale.x * scale, movingCube.transform.localScale.y, movingCube.transform.localScale.z * scale);
        newBaseCube.GetComponent<Rigidbody>().isKinematic = true;
        newBaseCube.GetComponent<Renderer>().material.color = color;

        newBaseCube.transform.parent = baseCube.transform.parent;
        baseCube = newBaseCube;
    }

    public void Restart()
    {
        isRestart = true;
        SceneManager.LoadScene(0);
    }

}
