using System.Collections;
using System.Collections.Generic;
using UnityEngine;

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

    public bool isLeftRightX = false;
    public bool isClickedToRun = false;

    float xMin, xMax, zMin, zMax;
    float xLeft, xRight, zLeft, zRight;

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
        
        
    }

    // Update is called once per frame
    void Update()
    {
       
    }

    public void SetMovingCube()
    {        
        if (isClickedToRun)
        {
            if (IsOverlapped())
            {
                
                if (IsPerfectlyOverlapped())
                {
                    Debug.Log("perfectly overlapped");
                }
                else
                {
                    Debug.Log("overlapped");
                    CreateNewCubes();
                }
            }
            else
            {
                Debug.Log("not overlapped");
            }
        }
       

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

        movingCube.SetActive(true);
    }

    bool IsOverlapped()
    {
        if (isLeftRightX)
        {
            xMin = baseCube.transform.position.x - baseCube.transform.localScale.x/2;
            xMax = baseCube.transform.position.x + baseCube.transform.localScale.x/2;
            xLeft = movingCube.transform.position.x - movingCube.transform.localScale.x/2;
            xRight = movingCube.transform.position.x + movingCube.transform.localScale.x/2;
            Debug.Log("xMin: " + xMin + " xMax: " + xMax + " xLeft: " + xLeft + " xRight: " + xRight);
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
            Debug.Log("zMin: " + zMin + " zMax: " + zMax + " zLeft: " + zLeft + " zRight: " + zRight);
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
            //float xMin = baseCube.transform.position.x - baseCube.transform.localScale.x / 2;
            //float xMax = baseCube.transform.position.x + baseCube.transform.localScale.x / 2;
            //float xLeft = movingCube.transform.position.x - movingCube.transform.localScale.x / 2;
            //float xRight = movingCube.transform.position.x + movingCube.transform.localScale.x / 2;
            //Debug.Log("xMin: " + xMin + " xMax: " + xMax + " xLeft: " + xLeft + " xRight: " + xRight);
            if(Mathf.Abs(xMin - xLeft) <= perfectionThreshold)
            {
                return true;
            }
        }
        else
        {
            //float zMin = baseCube.transform.position.z - baseCube.transform.localScale.z / 2;
            //float zMax = baseCube.transform.position.z + baseCube.transform.localScale.z / 2;
            //float zLeft = movingCube.transform.position.z - movingCube.transform.localScale.z / 2;
            //float zRight = movingCube.transform.position.z + movingCube.transform.localScale.z / 2;
            //Debug.Log("zMin: " + zMin + " zMax: " + zMax + " zLeft: " + zLeft + " zRight: " + zRight);
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

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(newTruncatedCubeXPos, movingCube.transform.position.y, movingCube.transform.position.z), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(newTruncatedCubeXScale, movingCube.transform.localScale.y, movingCube.transform.localScale.z);
                truncatedCube.tag = "DroppingCube";

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

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(newTruncatedCubeXPos, movingCube.transform.position.y, movingCube.transform.position.z), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(newTruncatedCubeXScale, movingCube.transform.localScale.y, movingCube.transform.localScale.z);
                truncatedCube.tag = "DroppingCube";

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

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(movingCube.transform.position.x, movingCube.transform.position.y, newTruncatedCubeZPos), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(movingCube.transform.localScale.x, movingCube.transform.localScale.y, newTruncatedCubeZScale);
                truncatedCube.tag = "DroppingCube";

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

                GameObject truncatedCube = Instantiate(prefabCube, new Vector3(movingCube.transform.position.x, movingCube.transform.position.y, newTruncatedCubeZPos), Quaternion.identity);
                truncatedCube.transform.localScale = new Vector3(movingCube.transform.localScale.x, movingCube.transform.localScale.y, newTruncatedCubeZScale);
                truncatedCube.tag = "DroppingCube";

                baseCube = newBaseCube;
            }
        }
    }
}
