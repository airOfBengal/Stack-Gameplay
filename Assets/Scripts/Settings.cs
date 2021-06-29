using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Settings : MonoBehaviour
{
    [SerializeField] GameObject settingsPanel;
    [SerializeField] Sprite musicOnImage;
    [SerializeField] Sprite musicOffImage;
    [SerializeField] Button musicOnOffButton;

    public bool isMusic = true;

    AudioSource audioSource;

    // Start is called before the first frame update
    void Start()
    {
        if (PlayerPrefs.HasKey("music"))
        {
            isMusic = PlayerPrefs.GetInt("music") == 1 ? true : false;
            SetMusicOnOffButtonImage();
        }

        audioSource = GetComponent<AudioSource>();
        audioSource.mute = !isMusic;
    }

    private void SetMusicOnOffButtonImage()
    {
        if (isMusic)
        {
            musicOnOffButton.GetComponent<Image>().sprite = musicOnImage;
        }
        else
        {
            musicOnOffButton.GetComponent<Image>().sprite = musicOffImage;
        }
    }

    public void OnMusicOnOff()
    {
        isMusic = !isMusic;
        SetMusicOnOffButtonImage();
        PlayerPrefs.SetInt("music", isMusic ? 1 : 0);
        PlayerPrefs.Save();
        audioSource.mute = !isMusic;
    }

    public void ShowSettingsPanel()
    {
        Time.timeScale = 0;
        SetMusicOnOffButtonImage();
        settingsPanel.SetActive(true);
    }

    public void OnCancelSettings()
    {
        settingsPanel.SetActive(false);
        Time.timeScale = 1;
    }
}
