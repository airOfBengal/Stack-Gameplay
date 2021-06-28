using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovingCube : MonoBehaviour
{
    public float speed = 2f;

    public float left { get; set; }
    public float right { get; set; }
    public float y { get; set; }

    // Start is called before the first frame update
    void Start()
    {
        //transform.position = xLeft.position;
    }

    // Update is called once per frame
    void Update()
    {
        if (GameManager.instance.isClickedToRun && !GameManager.instance.isGameOver)
        {
            if (GameManager.instance.isLeftRightX)
            {
                transform.position = new Vector3(Mathf.PingPong(Time.time * speed, right - left) + left, transform.position.y, transform.position.z);
            }
            else
            {
                transform.position = new Vector3(transform.position.x, transform.position.y, Mathf.PingPong(Time.time * speed, right - left) + left);
            }
        }
    }
}
