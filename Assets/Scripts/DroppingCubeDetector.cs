using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DroppingCubeDetector : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        if(other.tag == "DroppingCube")
        {
            Destroy(other.gameObject);
        }
    }
}
