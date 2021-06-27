using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    [SerializeField] Transform xLeft;
    [SerializeField] Transform xRight;
    [SerializeField] Transform zLeft;
    [SerializeField] Transform zRight;
    [SerializeField] GameObject movingCube;
    [SerializeField] GameObject baseCube;

    [SerializeField] float perfectionThreshold = 0.05f;

    public bool isLeftRightX = false;
    public bool isClickedToRun = false;

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
            movingCube.GetComponent<MovingCube>().left = xLeft.position.x;
            movingCube.GetComponent<MovingCube>().right = xRight.position.x;
            float y = baseCube.transform.position.y + baseCube.transform.localScale.y / 2 + movingCube.transform.localScale.y / 2;
            movingCube.transform.position = new Vector3(xLeft.position.x, y, baseCube.transform.position.z);            
        }
        else
        {
            movingCube.transform.localScale = baseCube.transform.localScale;
            movingCube.GetComponent<MovingCube>().left = zLeft.position.z;
            movingCube.GetComponent<MovingCube>().right = zRight.position.z;
            float y = baseCube.transform.position.y + baseCube.transform.localScale.y / 2 + movingCube.transform.localScale.y / 2;
            movingCube.transform.position = new Vector3(baseCube.transform.position.x, y, zLeft.position.z);
        }

        movingCube.SetActive(true);
    }

    bool IsOverlapped()
    {
        if (isLeftRightX)
        {
            float xMin = baseCube.transform.position.x - baseCube.transform.localScale.x/2;
            float xMax = baseCube.transform.position.x + baseCube.transform.localScale.x/2;
            float xLeft = movingCube.transform.position.x - movingCube.transform.localScale.x/2;
            float xRight = movingCube.transform.position.x + movingCube.transform.localScale.x/2;
            Debug.Log("xMin: " + xMin + " xMax: " + xMax + " xLeft: " + xLeft + " xRight: " + xRight);
            if((xLeft >= xMin && xLeft <= xMax) || (xRight >= xMin && xRight <= xMax))
            {
                return true;
            }
        }
        else
        {
            float zMin = baseCube.transform.position.z - baseCube.transform.localScale.z/2;
            float zMax = baseCube.transform.position.z + baseCube.transform.localScale.z/2;
            float zLeft = movingCube.transform.position.z - movingCube.transform.localScale.z/2;
            float zRight = movingCube.transform.position.z + movingCube.transform.localScale.z/2;
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
            float xMin = baseCube.transform.position.x - baseCube.transform.localScale.x / 2;
            //float xMax = baseCube.transform.position.x + baseCube.transform.localScale.x / 2;
            float xLeft = movingCube.transform.position.x - movingCube.transform.localScale.x / 2;
            //float xRight = movingCube.transform.position.x + movingCube.transform.localScale.x / 2;
            //Debug.Log("xMin: " + xMin + " xMax: " + xMax + " xLeft: " + xLeft + " xRight: " + xRight);
            if(Mathf.Abs(xMin - xLeft) <= perfectionThreshold)
            {
                return true;
            }
        }
        else
        {
            float zMin = baseCube.transform.position.z - baseCube.transform.localScale.z / 2;
            //float zMax = baseCube.transform.position.z + baseCube.transform.localScale.z / 2;
            float zLeft = movingCube.transform.position.z - movingCube.transform.localScale.z / 2;
            //float zRight = movingCube.transform.position.z + movingCube.transform.localScale.z / 2;
            //Debug.Log("zMin: " + zMin + " zMax: " + zMax + " zLeft: " + zLeft + " zRight: " + zRight);
            if(Mathf.Abs(zMin - zLeft) <= perfectionThreshold)
            {
                return true;
            }
        }
        return false;
    }
}
