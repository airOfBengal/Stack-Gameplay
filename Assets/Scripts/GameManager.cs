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

    public bool isLeftRight = false;
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
        isClickedToRun = true;
        isLeftRight = !isLeftRight;

        if (isLeftRight)
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

    }
}
