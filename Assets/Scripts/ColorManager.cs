using UnityEngine;

public class ColorManager : MonoBehaviour
{
    public static ColorManager instance;

    int currColorIdxToChange = 0;
    float[] rgb = new float[3];

    private void Awake()
    {
        if(ColorManager.instance == null)
        {
            ColorManager.instance = this;
        }
        else
        {
            Destroy(this);
        }
    }

    private void Start()
    {
        for(int i = 0; i < rgb.Length; i++)
        {
            rgb[i] = Random.Range(0f, 1f);
        }
        currColorIdxToChange = Random.Range(0, 3);
    }

    public Color GetNextColor()
    {
        if(rgb[currColorIdxToChange] >= 1.0f)
        {
            rgb[currColorIdxToChange] = 0f;
            currColorIdxToChange = (currColorIdxToChange + 1) % rgb.Length;
        }

        rgb[currColorIdxToChange] += 0.15f;

        return new Color(rgb[0], rgb[1], rgb[2]);
    }
}
