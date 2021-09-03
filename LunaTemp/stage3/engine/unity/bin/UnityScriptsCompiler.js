/**
 * @version 1.0.7857.27865
 * @copyright anton
 * @compiler Bridge.NET 17.9.11-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*ColorManager start.*/
    Bridge.define("ColorManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            currColorIdxToChange: 0,
            rgb: null
        },
        ctors: {
            init: function () {
                this.currColorIdxToChange = 0;
                this.rgb = System.Array.init(3, 0, System.Single);
            }
        },
        methods: {
            /*ColorManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(ColorManager.instance, null)) {
                    ColorManager.instance = this;
                } else {
                    UnityEngine.Object.Destroy(this);
                }
            },
            /*ColorManager.Awake end.*/

            /*ColorManager.Start start.*/
            Start: function () {
                for (var i = 0; i < this.rgb.length; i = (i + 1) | 0) {
                    this.rgb[i] = UnityEngine.Random.Range$1(0.0, 1.0);
                }
                this.currColorIdxToChange = UnityEngine.Random.Range(0, 3);
            },
            /*ColorManager.Start end.*/

            /*ColorManager.GetNextColor start.*/
            GetNextColor: function () {
                if (this.rgb[this.currColorIdxToChange] >= 1.0) {
                    this.rgb[this.currColorIdxToChange] = 0.0;
                    this.currColorIdxToChange = (((this.currColorIdxToChange + 1) | 0)) % this.rgb.length;
                }

                this.rgb[this.currColorIdxToChange] += 0.15;

                return new pc.Color( this.rgb[0], this.rgb[1], this.rgb[2], 1 );
            },
            /*ColorManager.GetNextColor end.*/


        }
    });
    /*ColorManager end.*/

    /*DroppingCubeDetector start.*/
    Bridge.define("DroppingCubeDetector", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*DroppingCubeDetector.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
                if (Bridge.referenceEquals(other.tag, "DroppingCube")) {
                    UnityEngine.MonoBehaviour.Destroy(other.gameObject);
                }
            },
            /*DroppingCubeDetector.OnTriggerEnter end.*/


        }
    });
    /*DroppingCubeDetector end.*/

    /*GameManager start.*/
    Bridge.define("GameManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null,
                isRestart: false
            },
            ctors: {
                init: function () {
                    this.isRestart = false;
                }
            }
        },
        fields: {
            xLeftTerminal: null,
            xRightTerminal: null,
            zLeftTerminal: null,
            zRightTerminal: null,
            movingCube: null,
            baseCube: null,
            prefabCube: null,
            perfectionThreshold: 0,
            stack: null,
            counterForStackShifting: 0,
            stackTitleText: null,
            tapTitleText: null,
            cutSfx: null,
            restartPanel: null,
            scoreText: null,
            bestScoreText: null,
            startScreen: null,
            clickPanel: null,
            perfectionSfxs: null,
            dropLargerCubeSfx: null,
            isLeftRightX: false,
            isClickedToRun: false,
            isGameOver: false,
            xMin: 0,
            xMax: 0,
            zMin: 0,
            zMax: 0,
            xLeft: 0,
            xRight: 0,
            zLeft: 0,
            zRight: 0,
            color: null,
            score: 0,
            perfectionCount: 0,
            audioSource: null
        },
        ctors: {
            init: function () {
                this.color = new UnityEngine.Color();
                this.perfectionThreshold = 0.05;
                this.counterForStackShifting = 3;
                this.isLeftRightX = false;
                this.isClickedToRun = false;
                this.isGameOver = false;
                this.color = new pc.Color( 1, 1, 1, 1 );
                this.score = 0;
                this.perfectionCount = 0;
            }
        },
        methods: {
            /*GameManager.Awake start.*/
            Awake: function () {
                if (UnityEngine.MonoBehaviour.op_Equality(GameManager.instance, null)) {
                    GameManager.instance = this;
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*GameManager.Awake end.*/

            /*GameManager.Start start.*/
            Start: function () {
                this.color = ColorManager.instance.GetNextColor();
                UnityEngine.Debug.Log$1("cube color: " + this.color);
                this.baseCube.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                this.audioSource = this.GetComponent(UnityEngine.AudioSource);

                if (!GameManager.isRestart) {
                    this.startScreen.SetActive(true);
                } else {
                    this.SetMovingCube();
                }
            },
            /*GameManager.Start end.*/

            /*GameManager.SetMovingCube start.*/
            SetMovingCube: function () {
                if (this.isClickedToRun) {
                    if (this.IsOverlapped()) {
                        if (this.IsPerfectlyOverlapped()) {
                            this.perfectionCount = (this.perfectionCount + 1) | 0;
                            if (this.perfectionCount <= 7) {
                                this.audioSource.PlayOneShot(this.perfectionSfxs[((this.perfectionCount - 1) | 0)]);
                                this.CreatePerfectCube(1.0);
                            } else {
                                this.audioSource.PlayOneShot(this.dropLargerCubeSfx);
                                if (this.perfectionCount === 8) {
                                    this.CreatePerfectCube(1.1);
                                }
                                this.perfectionCount = 0;
                            }

                        } else {
                            UnityEngine.Debug.Log$1("overlapped");
                            this.CreateNewCubes();
                            this.audioSource.PlayOneShot(this.cutSfx);
                            this.perfectionCount = 0;
                        }

                        this.score = (this.score + 1) | 0;

                        if (this.counterForStackShifting === 0) {
                            this.stack.transform.position = new pc.Vec3( this.stack.transform.position.x, this.stack.transform.position.y - this.baseCube.transform.localScale.y, this.stack.transform.position.z );
                        } else {
                            this.counterForStackShifting = (this.counterForStackShifting - 1) | 0;
                        }
                    } else {
                        this.perfectionCount = 0;
                        this.isGameOver = true;
                        this.StartCoroutine$1(this.WaitToGameOver());
                        // TODO: play game over tone, wait a second, reload scene
                    }
                }


                if (!this.isGameOver) {
                    this.isClickedToRun = true;
                    this.isLeftRightX = !this.isLeftRightX;

                    if (this.isLeftRightX) {
                        this.movingCube.transform.localScale = this.baseCube.transform.localScale.$clone();
                        this.movingCube.GetComponent(MovingCube).left = this.xLeftTerminal.position.x;
                        this.movingCube.GetComponent(MovingCube).right = this.xRightTerminal.position.x;
                        var y = this.baseCube.transform.position.y + this.baseCube.transform.localScale.y / 2 + this.movingCube.transform.localScale.y / 2;
                        this.movingCube.transform.position = new pc.Vec3( this.xLeftTerminal.position.x, y, this.baseCube.transform.position.z );
                    } else {
                        this.movingCube.transform.localScale = this.baseCube.transform.localScale.$clone();
                        this.movingCube.GetComponent(MovingCube).left = this.zLeftTerminal.position.z;
                        this.movingCube.GetComponent(MovingCube).right = this.zRightTerminal.position.z;
                        var y1 = this.baseCube.transform.position.y + this.baseCube.transform.localScale.y / 2 + this.movingCube.transform.localScale.y / 2;
                        this.movingCube.transform.position = new pc.Vec3( this.baseCube.transform.position.x, y1, this.zLeftTerminal.position.z );
                    }

                    this.color = ColorManager.instance.GetNextColor();
                    UnityEngine.Debug.Log$1("moving  cube color: " + this.color);
                    this.movingCube.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();
                    this.movingCube.SetActive(true);
                }

                if (this.isClickedToRun) {
                    this.tapTitleText.SetActive(false);
                    this.stackTitleText.GetComponent(UnityEngine.UI.Text).text = this.score === 0 ? "" : "" + this.score;
                }
            },
            /*GameManager.SetMovingCube end.*/

            /*GameManager.WaitToGameOver start.*/
            WaitToGameOver: function () {
                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    UnityEngine.Debug.Log$1("not overlapped, game over");

                                        this.movingCube.GetComponent(MovingCube).speed = 0.0;
                                        this.movingCube.GetComponent(UnityEngine.Rigidbody).isKinematic = false;
                                        this.movingCube.GetComponent(UnityEngine.Rigidbody).useGravity = true;
                                        this.movingCube.transform.position = this.movingCube.transform.position.$clone();

                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this.ShowRestartPanel();

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*GameManager.WaitToGameOver end.*/

            /*GameManager.ShowRestartPanel start.*/
            ShowRestartPanel: function () {
                this.clickPanel.SetActive(false);
                this.stackTitleText.GetComponent(UnityEngine.UI.Text).text = "";
                this.scoreText.text = "Score: " + this.score;
                if (UnityEngine.PlayerPrefs.HasKey("best_score")) {
                    var bestScore = UnityEngine.PlayerPrefs.GetInt("best_score");
                    if (this.score > bestScore) {
                        UnityEngine.PlayerPrefs.SetInt("best_score", this.score);
                        UnityEngine.PlayerPrefs.Save();
                    }

                    this.bestScoreText.GetComponent(UnityEngine.UI.Text).text = "Best Score: " + UnityEngine.PlayerPrefs.GetInt("best_score");
                } else {
                    this.bestScoreText.SetActive(false);
                    UnityEngine.PlayerPrefs.SetInt("best_score", this.score);
                    UnityEngine.PlayerPrefs.Save();
                }

                this.restartPanel.SetActive(true);

                this.ZoomOut();
            },
            /*GameManager.ShowRestartPanel end.*/

            /*GameManager.ZoomOut start.*/
            ZoomOut: function () {

            },
            /*GameManager.ZoomOut end.*/

            /*GameManager.IsOverlapped start.*/
            IsOverlapped: function () {
                if (this.isLeftRightX) {
                    this.xMin = this.baseCube.transform.position.x - this.baseCube.transform.localScale.x / 2;
                    this.xMax = this.baseCube.transform.position.x + this.baseCube.transform.localScale.x / 2;
                    this.xLeft = this.movingCube.transform.position.x - this.movingCube.transform.localScale.x / 2;
                    this.xRight = this.movingCube.transform.position.x + this.movingCube.transform.localScale.x / 2;

                    if ((this.xLeft >= this.xMin && this.xLeft <= this.xMax) || (this.xRight >= this.xMin && this.xRight <= this.xMax)) {
                        return true;
                    }
                } else {
                    this.zMin = this.baseCube.transform.position.z - this.baseCube.transform.localScale.z / 2;
                    this.zMax = this.baseCube.transform.position.z + this.baseCube.transform.localScale.z / 2;
                    this.zLeft = this.movingCube.transform.position.z - this.movingCube.transform.localScale.z / 2;
                    this.zRight = this.movingCube.transform.position.z + this.movingCube.transform.localScale.z / 2;

                    if ((this.zLeft >= this.zMin && this.zLeft <= this.zMax) || (this.zRight >= this.zMin && this.zRight <= this.zMax)) {
                        return true;
                    }
                }

                return false;
            },
            /*GameManager.IsOverlapped end.*/

            /*GameManager.IsPerfectlyOverlapped start.*/
            IsPerfectlyOverlapped: function () {
                if (this.isLeftRightX) {
                    if (Math.abs(this.xMin - this.xLeft) <= this.perfectionThreshold) {
                        return true;
                    }
                } else {
                    if (Math.abs(this.zMin - this.zLeft) <= this.perfectionThreshold) {
                        return true;
                    }
                }
                return false;
            },
            /*GameManager.IsPerfectlyOverlapped end.*/

            /*GameManager.CreateNewCubes start.*/
            CreateNewCubes: function () {
                if (this.isLeftRightX) {
                    if (this.xLeft > this.xMin) {
                        var xDist = Math.abs(this.baseCube.transform.position.x - this.movingCube.transform.position.x);
                        var newBaseCubeXScale = this.movingCube.transform.localScale.x - xDist;
                        var newTruncatedCubeXScale = xDist;
                        var newBaseCubeXPos = this.movingCube.transform.position.x - xDist / 2;
                        var newTruncatedCubeXPos = this.movingCube.transform.position.x + xDist;

                        var newBaseCube = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( newBaseCubeXPos, this.movingCube.transform.position.y, this.movingCube.transform.position.z ), pc.Quat.IDENTITY.clone());
                        newBaseCube.transform.localScale = new pc.Vec3( newBaseCubeXScale, this.movingCube.transform.localScale.y, this.movingCube.transform.localScale.z );
                        newBaseCube.GetComponent(UnityEngine.Rigidbody).isKinematic = true;
                        newBaseCube.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        var truncatedCube = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( newTruncatedCubeXPos, this.movingCube.transform.position.y, this.movingCube.transform.position.z ), pc.Quat.IDENTITY.clone());
                        truncatedCube.transform.localScale = new pc.Vec3( newTruncatedCubeXScale, this.movingCube.transform.localScale.y, this.movingCube.transform.localScale.z );
                        truncatedCube.tag = "DroppingCube";
                        truncatedCube.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        newBaseCube.transform.parent = this.baseCube.transform.parent;
                        this.baseCube = newBaseCube;
                    } else if (this.xRight < this.xMax) {
                        var xDist1 = Math.abs(this.baseCube.transform.position.x - this.movingCube.transform.position.x);
                        var newBaseCubeXScale1 = this.movingCube.transform.localScale.x - xDist1;
                        var newTruncatedCubeXScale1 = xDist1;
                        var newBaseCubeXPos1 = this.movingCube.transform.position.x + xDist1 / 2;
                        var newTruncatedCubeXPos1 = this.movingCube.transform.position.x - xDist1;

                        var newBaseCube1 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( newBaseCubeXPos1, this.movingCube.transform.position.y, this.movingCube.transform.position.z ), pc.Quat.IDENTITY.clone());
                        newBaseCube1.transform.localScale = new pc.Vec3( newBaseCubeXScale1, this.movingCube.transform.localScale.y, this.movingCube.transform.localScale.z );
                        newBaseCube1.GetComponent(UnityEngine.Rigidbody).isKinematic = true;
                        newBaseCube1.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        var truncatedCube1 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( newTruncatedCubeXPos1, this.movingCube.transform.position.y, this.movingCube.transform.position.z ), pc.Quat.IDENTITY.clone());
                        truncatedCube1.transform.localScale = new pc.Vec3( newTruncatedCubeXScale1, this.movingCube.transform.localScale.y, this.movingCube.transform.localScale.z );
                        truncatedCube1.tag = "DroppingCube";
                        truncatedCube1.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        newBaseCube1.transform.parent = this.baseCube.transform.parent;
                        this.baseCube = newBaseCube1;
                    }
                } else {
                    if (this.zLeft > this.zMin) {
                        var zDist = Math.abs(this.baseCube.transform.position.z - this.movingCube.transform.position.z);
                        var newBaseCubeZScale = this.movingCube.transform.localScale.z - zDist;
                        var newTruncatedCubeZScale = zDist;
                        var newBaseCubeZPos = this.movingCube.transform.position.z - zDist / 2;
                        var newTruncatedCubeZPos = this.movingCube.transform.position.z + zDist;

                        var newBaseCube2 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( this.movingCube.transform.position.x, this.movingCube.transform.position.y, newBaseCubeZPos ), pc.Quat.IDENTITY.clone());
                        newBaseCube2.transform.localScale = new pc.Vec3( this.movingCube.transform.localScale.x, this.movingCube.transform.localScale.y, newBaseCubeZScale );
                        newBaseCube2.GetComponent(UnityEngine.Rigidbody).isKinematic = true;
                        newBaseCube2.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        var truncatedCube2 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( this.movingCube.transform.position.x, this.movingCube.transform.position.y, newTruncatedCubeZPos ), pc.Quat.IDENTITY.clone());
                        truncatedCube2.transform.localScale = new pc.Vec3( this.movingCube.transform.localScale.x, this.movingCube.transform.localScale.y, newTruncatedCubeZScale );
                        truncatedCube2.tag = "DroppingCube";
                        truncatedCube2.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        newBaseCube2.transform.parent = this.baseCube.transform.parent;
                        this.baseCube = newBaseCube2;
                    } else if (this.zRight < this.zMax) {
                        var zDist1 = Math.abs(this.baseCube.transform.position.z - this.movingCube.transform.position.z);
                        var newBaseCubeZScale1 = this.movingCube.transform.localScale.z - zDist1;
                        var newTruncatedCubeZScale1 = zDist1;
                        var newBaseCubeZPos1 = this.movingCube.transform.position.z + zDist1 / 2;
                        var newTruncatedCubeZPos1 = this.movingCube.transform.position.z - zDist1;

                        var newBaseCube3 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( this.movingCube.transform.position.x, this.movingCube.transform.position.y, newBaseCubeZPos1 ), pc.Quat.IDENTITY.clone());
                        newBaseCube3.transform.localScale = new pc.Vec3( this.movingCube.transform.localScale.x, this.movingCube.transform.localScale.y, newBaseCubeZScale1 );
                        newBaseCube3.GetComponent(UnityEngine.Rigidbody).isKinematic = true;
                        newBaseCube3.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        var truncatedCube3 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, new pc.Vec3( this.movingCube.transform.position.x, this.movingCube.transform.position.y, newTruncatedCubeZPos1 ), pc.Quat.IDENTITY.clone());
                        truncatedCube3.transform.localScale = new pc.Vec3( this.movingCube.transform.localScale.x, this.movingCube.transform.localScale.y, newTruncatedCubeZScale1 );
                        truncatedCube3.tag = "DroppingCube";
                        truncatedCube3.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                        newBaseCube3.transform.parent = this.baseCube.transform.parent;
                        this.baseCube = newBaseCube3;
                    }
                }
            },
            /*GameManager.CreateNewCubes end.*/

            /*GameManager.CreatePerfectCube start.*/
            CreatePerfectCube: function (scale) {
                var newBaseCube = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.prefabCube, this.movingCube.transform.position.$clone(), pc.Quat.IDENTITY.clone());
                newBaseCube.transform.localScale = new pc.Vec3( this.movingCube.transform.localScale.x * scale, this.movingCube.transform.localScale.y, this.movingCube.transform.localScale.z * scale );
                newBaseCube.GetComponent(UnityEngine.Rigidbody).isKinematic = true;
                newBaseCube.GetComponent(UnityEngine.Renderer).material.color = this.color.$clone();

                newBaseCube.transform.parent = this.baseCube.transform.parent;
                this.baseCube = newBaseCube;
            },
            /*GameManager.CreatePerfectCube end.*/

            /*GameManager.Restart start.*/
            Restart: function () {
                GameManager.isRestart = true;
                UnityEngine.SceneManagement.SceneManager.LoadScene(0);
            },
            /*GameManager.Restart end.*/


        }
    });
    /*GameManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*MovingCube start.*/
    Bridge.define("MovingCube", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            speed: 0,
            left: 0,
            right: 0,
            y: 0
        },
        ctors: {
            init: function () {
                this.speed = 2.0;
            }
        },
        methods: {
            /*MovingCube.Start start.*/
            Start: function () {
                //transform.position = xLeft.position;
            },
            /*MovingCube.Start end.*/

            /*MovingCube.Update start.*/
            Update: function () {
                if (GameManager.instance.isClickedToRun && !GameManager.instance.isGameOver) {
                    if (GameManager.instance.isLeftRightX) {
                        this.transform.position = new pc.Vec3( UnityEngine.Mathf.PingPong(UnityEngine.Time.time * this.speed, this.right - this.left) + this.left, this.transform.position.y, this.transform.position.z );
                    } else {
                        this.transform.position = new pc.Vec3( this.transform.position.x, this.transform.position.y, UnityEngine.Mathf.PingPong(UnityEngine.Time.time * this.speed, this.right - this.left) + this.left );
                    }
                }
            },
            /*MovingCube.Update end.*/


        }
    });
    /*MovingCube end.*/

    /*Settings start.*/
    Bridge.define("Settings", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            settingsPanel: null,
            musicOnImage: null,
            musicOffImage: null,
            musicOnOffButton: null,
            isMusic: false,
            audioSource: null
        },
        ctors: {
            init: function () {
                this.isMusic = true;
            }
        },
        methods: {
            /*Settings.Start start.*/
            Start: function () {
                if (UnityEngine.PlayerPrefs.HasKey("music")) {
                    this.isMusic = UnityEngine.PlayerPrefs.GetInt("music") === 1 ? true : false;
                    this.SetMusicOnOffButtonImage();
                }

                this.audioSource = this.GetComponent(UnityEngine.AudioSource);
                this.audioSource.mute = !this.isMusic;
            },
            /*Settings.Start end.*/

            /*Settings.SetMusicOnOffButtonImage start.*/
            SetMusicOnOffButtonImage: function () {
                if (this.isMusic) {
                    this.musicOnOffButton.GetComponent(UnityEngine.UI.Image).sprite = this.musicOnImage;
                } else {
                    this.musicOnOffButton.GetComponent(UnityEngine.UI.Image).sprite = this.musicOffImage;
                }
            },
            /*Settings.SetMusicOnOffButtonImage end.*/

            /*Settings.OnMusicOnOff start.*/
            OnMusicOnOff: function () {
                this.isMusic = !this.isMusic;
                this.SetMusicOnOffButtonImage();
                UnityEngine.PlayerPrefs.SetInt("music", this.isMusic ? 1 : 0);
                UnityEngine.PlayerPrefs.Save();
                this.audioSource.mute = !this.isMusic;
            },
            /*Settings.OnMusicOnOff end.*/

            /*Settings.ShowSettingsPanel start.*/
            ShowSettingsPanel: function () {
                UnityEngine.Time.timeScale = 0;
                this.SetMusicOnOffButtonImage();
                this.settingsPanel.SetActive(true);
            },
            /*Settings.ShowSettingsPanel end.*/

            /*Settings.OnCancelSettings start.*/
            OnCancelSettings: function () {
                this.settingsPanel.SetActive(false);
                UnityEngine.Time.timeScale = 1;
            },
            /*Settings.OnCancelSettings end.*/


        }
    });
    /*Settings end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI"];

    /*ColorManager start.*/
    $m("ColorManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"GetNextColor","t":8,"sn":"GetNextColor","rt":$n[1].Color},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"currColorIdxToChange","t":4,"rt":$n[0].Int32,"sn":"currColorIdxToChange","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"instance","is":true,"t":4,"rt":ColorManager,"sn":"instance"},{"a":1,"n":"rgb","t":4,"rt":$n[0].Array.type(System.Single),"sn":"rgb"}]}; }, $n);
    /*ColorManager end.*/

    /*DroppingCubeDetector start.*/
    $m("DroppingCubeDetector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]}]}; }, $n);
    /*DroppingCubeDetector end.*/

    /*GameManager start.*/
    $m("GameManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"CreateNewCubes","t":8,"sn":"CreateNewCubes","rt":$n[0].Void},{"a":1,"n":"CreatePerfectCube","t":8,"pi":[{"n":"scale","pt":$n[0].Single,"ps":0}],"sn":"CreatePerfectCube","rt":$n[0].Void,"p":[$n[0].Single]},{"a":1,"n":"IsOverlapped","t":8,"sn":"IsOverlapped","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"IsPerfectlyOverlapped","t":8,"sn":"IsPerfectlyOverlapped","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Restart","t":8,"sn":"Restart","rt":$n[0].Void},{"a":2,"n":"SetMovingCube","t":8,"sn":"SetMovingCube","rt":$n[0].Void},{"a":1,"n":"ShowRestartPanel","t":8,"sn":"ShowRestartPanel","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"WaitToGameOver","t":8,"sn":"WaitToGameOver","rt":$n[2].IEnumerator},{"a":1,"n":"ZoomOut","t":8,"sn":"ZoomOut","rt":$n[0].Void},{"a":1,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"baseCube","t":4,"rt":$n[1].GameObject,"sn":"baseCube"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"bestScoreText","t":4,"rt":$n[1].GameObject,"sn":"bestScoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"clickPanel","t":4,"rt":$n[1].GameObject,"sn":"clickPanel"},{"a":1,"n":"color","t":4,"rt":$n[1].Color,"sn":"color"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"counterForStackShifting","t":4,"rt":$n[0].Int32,"sn":"counterForStackShifting","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"cutSfx","t":4,"rt":$n[1].AudioClip,"sn":"cutSfx"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"dropLargerCubeSfx","t":4,"rt":$n[1].AudioClip,"sn":"dropLargerCubeSfx"},{"a":2,"n":"instance","is":true,"t":4,"rt":GameManager,"sn":"instance"},{"a":2,"n":"isClickedToRun","t":4,"rt":$n[0].Boolean,"sn":"isClickedToRun","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isGameOver","t":4,"rt":$n[0].Boolean,"sn":"isGameOver","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isLeftRightX","t":4,"rt":$n[0].Boolean,"sn":"isLeftRightX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isRestart","is":true,"t":4,"rt":$n[0].Boolean,"sn":"isRestart","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"movingCube","t":4,"rt":$n[1].GameObject,"sn":"movingCube"},{"a":1,"n":"perfectionCount","t":4,"rt":$n[0].Int32,"sn":"perfectionCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectionSfxs","t":4,"rt":System.Array.type(UnityEngine.AudioClip),"sn":"perfectionSfxs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"perfectionThreshold","t":4,"rt":$n[0].Single,"sn":"perfectionThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"prefabCube","t":4,"rt":$n[1].GameObject,"sn":"prefabCube"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"restartPanel","t":4,"rt":$n[1].GameObject,"sn":"restartPanel"},{"a":1,"n":"score","t":4,"rt":$n[0].Int32,"sn":"score","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"scoreText","t":4,"rt":$n[3].Text,"sn":"scoreText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stack","t":4,"rt":$n[1].GameObject,"sn":"stack"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"stackTitleText","t":4,"rt":$n[1].GameObject,"sn":"stackTitleText"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"startScreen","t":4,"rt":$n[1].GameObject,"sn":"startScreen"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tapTitleText","t":4,"rt":$n[1].GameObject,"sn":"tapTitleText"},{"a":1,"n":"xLeft","t":4,"rt":$n[0].Single,"sn":"xLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"xLeftTerminal","t":4,"rt":$n[1].Transform,"sn":"xLeftTerminal"},{"a":1,"n":"xMax","t":4,"rt":$n[0].Single,"sn":"xMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"xMin","t":4,"rt":$n[0].Single,"sn":"xMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"xRight","t":4,"rt":$n[0].Single,"sn":"xRight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"xRightTerminal","t":4,"rt":$n[1].Transform,"sn":"xRightTerminal"},{"a":1,"n":"zLeft","t":4,"rt":$n[0].Single,"sn":"zLeft","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zLeftTerminal","t":4,"rt":$n[1].Transform,"sn":"zLeftTerminal"},{"a":1,"n":"zMax","t":4,"rt":$n[0].Single,"sn":"zMax","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"zMin","t":4,"rt":$n[0].Single,"sn":"zMin","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"zRight","t":4,"rt":$n[0].Single,"sn":"zRight","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"zRightTerminal","t":4,"rt":$n[1].Transform,"sn":"zRightTerminal"}]}; }, $n);
    /*GameManager end.*/

    /*MovingCube start.*/
    $m("MovingCube", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"left","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_left","t":8,"rt":$n[0].Single,"fg":"left","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_left","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"left"},"fn":"left"},{"a":2,"n":"right","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_right","t":8,"rt":$n[0].Single,"fg":"right","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_right","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"right"},"fn":"right"},{"a":2,"n":"y","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_y","t":8,"rt":$n[0].Single,"fg":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_y","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"y"},"fn":"y"},{"a":2,"n":"speed","t":4,"rt":$n[0].Single,"sn":"speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<left>k__BackingField","t":4,"rt":$n[0].Single,"sn":"left","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<right>k__BackingField","t":4,"rt":$n[0].Single,"sn":"right","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"backing":true,"n":"<y>k__BackingField","t":4,"rt":$n[0].Single,"sn":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*MovingCube end.*/

    /*Settings start.*/
    $m("Settings", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnCancelSettings","t":8,"sn":"OnCancelSettings","rt":$n[0].Void},{"a":2,"n":"OnMusicOnOff","t":8,"sn":"OnMusicOnOff","rt":$n[0].Void},{"a":1,"n":"SetMusicOnOffButtonImage","t":8,"sn":"SetMusicOnOffButtonImage","rt":$n[0].Void},{"a":2,"n":"ShowSettingsPanel","t":8,"sn":"ShowSettingsPanel","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"audioSource","t":4,"rt":$n[1].AudioSource,"sn":"audioSource"},{"a":2,"n":"isMusic","t":4,"rt":$n[0].Boolean,"sn":"isMusic","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicOffImage","t":4,"rt":$n[1].Sprite,"sn":"musicOffImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicOnImage","t":4,"rt":$n[1].Sprite,"sn":"musicOnImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"musicOnOffButton","t":4,"rt":$n[3].Button,"sn":"musicOnOffButton"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"settingsPanel","t":4,"rt":$n[1].GameObject,"sn":"settingsPanel"}]}; }, $n);
    /*Settings end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

});
