var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i288 = root || request.c( 'UnityEngine.JointSpring' )
  var i289 = data
  i288.spring = i289[0]
  i288.damper = i289[1]
  i288.targetPosition = i289[2]
  return i288
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i290 = root || request.c( 'UnityEngine.JointMotor' )
  var i291 = data
  i290.m_TargetVelocity = i291[0]
  i290.m_Force = i291[1]
  i290.m_FreeSpin = i291[2]
  return i290
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i292 = root || request.c( 'UnityEngine.JointLimits' )
  var i293 = data
  i292.m_Min = i293[0]
  i292.m_Max = i293[1]
  i292.m_Bounciness = i293[2]
  i292.m_BounceMinVelocity = i293[3]
  i292.m_ContactDistance = i293[4]
  i292.minBounce = i293[5]
  i292.maxBounce = i293[6]
  return i292
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i294 = root || request.c( 'UnityEngine.JointDrive' )
  var i295 = data
  i294.m_PositionSpring = i295[0]
  i294.m_PositionDamper = i295[1]
  i294.m_MaximumForce = i295[2]
  return i294
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i296 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i297 = data
  i296.m_Spring = i297[0]
  i296.m_Damper = i297[1]
  return i296
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i298 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i299 = data
  i298.m_Limit = i299[0]
  i298.m_Bounciness = i299[1]
  i298.m_ContactDistance = i299[2]
  return i298
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i300 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i301 = data
  i300.m_ExtremumSlip = i301[0]
  i300.m_ExtremumValue = i301[1]
  i300.m_AsymptoteSlip = i301[2]
  i300.m_AsymptoteValue = i301[3]
  i300.m_Stiffness = i301[4]
  return i300
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i302 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i303 = data
  i302.m_LowerAngle = i303[0]
  i302.m_UpperAngle = i303[1]
  return i302
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i304 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i305 = data
  i304.m_MotorSpeed = i305[0]
  i304.m_MaximumMotorTorque = i305[1]
  return i304
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i306 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i307 = data
  i306.m_DampingRatio = i307[0]
  i306.m_Frequency = i307[1]
  i306.m_Angle = i307[2]
  return i306
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i308 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i309 = data
  i308.m_LowerTranslation = i309[0]
  i308.m_UpperTranslation = i309[1]
  return i308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i310 = root || new pc.UnityMaterial()
  var i311 = data
  i310.name = i311[0]
  request.r(i311[1], i311[2], 0, i310, 'shader')
  i310.renderQueue = i311[3]
  i310.enableInstancing = !!i311[4]
  var i313 = i311[5]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i313[i + 0]) );
  }
  i310.floatParameters = i312
  var i315 = i311[6]
  var i314 = []
  for(var i = 0; i < i315.length; i += 1) {
    i314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i315[i + 0]) );
  }
  i310.colorParameters = i314
  var i317 = i311[7]
  var i316 = []
  for(var i = 0; i < i317.length; i += 1) {
    i316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i317[i + 0]) );
  }
  i310.vectorParameters = i316
  var i319 = i311[8]
  var i318 = []
  for(var i = 0; i < i319.length; i += 1) {
    i318.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i319[i + 0]) );
  }
  i310.textureParameters = i318
  var i321 = i311[9]
  var i320 = []
  for(var i = 0; i < i321.length; i += 1) {
    i320.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i321[i + 0]) );
  }
  i310.materialFlags = i320
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i325 = data
  i324.name = i325[0]
  i324.value = i325[1]
  return i324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i329 = data
  i328.name = i329[0]
  i328.value = new pc.Color(i329[1], i329[2], i329[3], i329[4])
  return i328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i333 = data
  i332.name = i333[0]
  i332.value = new pc.Vec4( i333[1], i333[2], i333[3], i333[4] )
  return i332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i337 = data
  i336.name = i337[0]
  request.r(i337[1], i337[2], 0, i336, 'value')
  return i336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i341 = data
  i340.name = i341[0]
  i340.enabled = !!i341[1]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i343 = data
  i342.position = new pc.Vec3( i343[0], i343[1], i343[2] )
  i342.scale = new pc.Vec3( i343[3], i343[4], i343[5] )
  i342.rotation = new pc.Quat(i343[6], i343[7], i343[8], i343[9])
  return i342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i345 = data
  i344.enabled = !!i345[0]
  i344.aspect = i345[1]
  i344.orthographic = !!i345[2]
  i344.orthographicSize = i345[3]
  i344.backgroundColor = new pc.Color(i345[4], i345[5], i345[6], i345[7])
  i344.nearClipPlane = i345[8]
  i344.farClipPlane = i345[9]
  i344.fieldOfView = i345[10]
  i344.depth = i345[11]
  i344.clearFlags = i345[12]
  i344.cullingMask = i345[13]
  i344.rect = i345[14]
  request.r(i345[15], i345[16], 0, i344, 'targetTexture')
  return i344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i347 = data
  i346.name = i347[0]
  i346.tag = i347[1]
  i346.enabled = !!i347[2]
  i346.isStatic = !!i347[3]
  i346.layer = i347[4]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i349 = data
  i348.enabled = !!i349[0]
  i348.type = i349[1]
  i348.color = new pc.Color(i349[2], i349[3], i349[4], i349[5])
  i348.cullingMask = i349[6]
  i348.intensity = i349[7]
  i348.range = i349[8]
  i348.spotAngle = i349[9]
  i348.shadows = i349[10]
  i348.shadowNormalBias = i349[11]
  i348.shadowBias = i349[12]
  i348.shadowStrength = i349[13]
  i348.lightmapBakeType = i349[14]
  i348.renderMode = i349[15]
  request.r(i349[16], i349[17], 0, i348, 'cookie')
  i348.cookieSize = i349[18]
  return i348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i351 = data
  i350.name = i351[0]
  i350.halfPrecision = !!i351[1]
  i350.vertexCount = i351[2]
  i350.aabb = i351[3]
  var i353 = i351[4]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( !!i353[i + 0] );
  }
  i350.streams = i352
  i350.vertices = i351[5]
  var i355 = i351[6]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i355[i + 0]) );
  }
  i350.subMeshes = i354
  var i357 = i351[7]
  var i356 = []
  for(var i = 0; i < i357.length; i += 16) {
    i356.push( new pc.Mat4().setData(i357[i + 0], i357[i + 1], i357[i + 2], i357[i + 3],  i357[i + 4], i357[i + 5], i357[i + 6], i357[i + 7],  i357[i + 8], i357[i + 9], i357[i + 10], i357[i + 11],  i357[i + 12], i357[i + 13], i357[i + 14], i357[i + 15]) );
  }
  i350.bindposes = i356
  var i359 = i351[8]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i359[i + 0]) );
  }
  i350.blendShapes = i358
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i365 = data
  i364.triangles = i365[0]
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i371 = data
  i370.name = i371[0]
  var i373 = i371[1]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i373[i + 0]) );
  }
  i370.frames = i372
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i375 = data
  request.r(i375[0], i375[1], 0, i374, 'sharedMesh')
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i377 = data
  request.r(i377[0], i377[1], 0, i376, 'additionalVertexStreams')
  i376.enabled = !!i377[2]
  request.r(i377[3], i377[4], 0, i376, 'sharedMaterial')
  var i379 = i377[5]
  var i378 = []
  for(var i = 0; i < i379.length; i += 2) {
  request.r(i379[i + 0], i379[i + 1], 2, i378, '')
  }
  i376.sharedMaterials = i378
  i376.receiveShadows = !!i377[6]
  i376.shadowCastingMode = i377[7]
  i376.sortingLayerID = i377[8]
  i376.sortingOrder = i377[9]
  i376.lightmapIndex = i377[10]
  i376.lightmapSceneIndex = i377[11]
  i376.lightmapScaleOffset = new pc.Vec4( i377[12], i377[13], i377[14], i377[15] )
  i376.lightProbeUsage = i377[16]
  i376.reflectionProbeUsage = i377[17]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i383 = data
  i382.center = new pc.Vec3( i383[0], i383[1], i383[2] )
  i382.size = new pc.Vec3( i383[3], i383[4], i383[5] )
  i382.enabled = !!i383[6]
  i382.isTrigger = !!i383[7]
  request.r(i383[8], i383[9], 0, i382, 'material')
  return i382
}

Deserializers["MovingCube"] = function (request, data, root) {
  var i384 = root || request.c( 'MovingCube' )
  var i385 = data
  i384.speed = i385[0]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i387 = data
  i386.mass = i387[0]
  i386.drag = i387[1]
  i386.angularDrag = i387[2]
  i386.useGravity = !!i387[3]
  i386.isKinematic = !!i387[4]
  i386.constraints = i387[5]
  i386.maxAngularVelocity = i387[6]
  i386.collisionDetectionMode = i387[7]
  i386.interpolation = i387[8]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i389 = data
  i388.name = i389[0]
  i388.width = i389[1]
  i388.height = i389[2]
  i388.mipmapCount = i389[3]
  i388.anisoLevel = i389[4]
  i388.filterMode = i389[5]
  i388.hdr = !!i389[6]
  i388.format = i389[7]
  i388.wrapMode = i389[8]
  i388.alphaIsTransparency = !!i389[9]
  i388.alphaSource = i389[10]
  return i388
}

Deserializers["GameManager"] = function (request, data, root) {
  var i390 = root || request.c( 'GameManager' )
  var i391 = data
  i390.isLeftRightX = !!i391[0]
  i390.isClickedToRun = !!i391[1]
  i390.isGameOver = !!i391[2]
  request.r(i391[3], i391[4], 0, i390, 'xLeftTerminal')
  request.r(i391[5], i391[6], 0, i390, 'xRightTerminal')
  request.r(i391[7], i391[8], 0, i390, 'zLeftTerminal')
  request.r(i391[9], i391[10], 0, i390, 'zRightTerminal')
  request.r(i391[11], i391[12], 0, i390, 'movingCube')
  request.r(i391[13], i391[14], 0, i390, 'baseCube')
  request.r(i391[15], i391[16], 0, i390, 'prefabCube')
  i390.perfectionThreshold = i391[17]
  request.r(i391[18], i391[19], 0, i390, 'stack')
  i390.counterForStackShifting = i391[20]
  request.r(i391[21], i391[22], 0, i390, 'stackTitleText')
  request.r(i391[23], i391[24], 0, i390, 'tapTitleText')
  request.r(i391[25], i391[26], 0, i390, 'cutSfx')
  request.r(i391[27], i391[28], 0, i390, 'restartPanel')
  request.r(i391[29], i391[30], 0, i390, 'scoreText')
  request.r(i391[31], i391[32], 0, i390, 'bestScoreText')
  request.r(i391[33], i391[34], 0, i390, 'startScreen')
  request.r(i391[35], i391[36], 0, i390, 'clickPanel')
  var i393 = i391[37]
  var i392 = []
  for(var i = 0; i < i393.length; i += 2) {
  request.r(i393[i + 0], i393[i + 1], 2, i392, '')
  }
  i390.perfectionSfxs = i392
  request.r(i391[38], i391[39], 0, i390, 'dropLargerCubeSfx')
  return i390
}

Deserializers["ColorManager"] = function (request, data, root) {
  var i396 = root || request.c( 'ColorManager' )
  var i397 = data
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i399 = data
  request.r(i399[0], i399[1], 0, i398, 'clip')
  i398.playOnAwake = !!i399[2]
  i398.loop = !!i399[3]
  i398.time = i399[4]
  i398.enabled = !!i399[5]
  return i398
}

Deserializers["Settings"] = function (request, data, root) {
  var i400 = root || request.c( 'Settings' )
  var i401 = data
  i400.isMusic = !!i401[0]
  request.r(i401[1], i401[2], 0, i400, 'settingsPanel')
  request.r(i401[3], i401[4], 0, i400, 'musicOnImage')
  request.r(i401[5], i401[6], 0, i400, 'musicOffImage')
  request.r(i401[7], i401[8], 0, i400, 'musicOnOffButton')
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i403 = data
  i402.pivot = new pc.Vec2( i403[0], i403[1] )
  i402.anchorMin = new pc.Vec2( i403[2], i403[3] )
  i402.anchorMax = new pc.Vec2( i403[4], i403[5] )
  i402.sizeDelta = new pc.Vec2( i403[6], i403[7] )
  i402.anchoredPosition3D = new pc.Vec3( i403[8], i403[9], i403[10] )
  i402.rotation = new pc.Quat(i403[11], i403[12], i403[13], i403[14])
  i402.scale = new pc.Vec3( i403[15], i403[16], i403[17] )
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i405 = data
  i404.enabled = !!i405[0]
  i404.planeDistance = i405[1]
  i404.referencePixelsPerUnit = i405[2]
  i404.isFallbackOverlay = !!i405[3]
  i404.renderMode = i405[4]
  i404.renderOrder = i405[5]
  i404.sortingLayerName = i405[6]
  i404.sortingOrder = i405[7]
  i404.scaleFactor = i405[8]
  request.r(i405[9], i405[10], 0, i404, 'worldCamera')
  i404.overrideSorting = !!i405[11]
  i404.pixelPerfect = !!i405[12]
  i404.targetDisplay = i405[13]
  i404.overridePixelPerfect = !!i405[14]
  return i404
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i407 = data
  i406.m_UiScaleMode = i407[0]
  i406.m_ReferencePixelsPerUnit = i407[1]
  i406.m_ScaleFactor = i407[2]
  i406.m_ReferenceResolution = new pc.Vec2( i407[3], i407[4] )
  i406.m_ScreenMatchMode = i407[5]
  i406.m_MatchWidthOrHeight = i407[6]
  i406.m_PhysicalUnit = i407[7]
  i406.m_FallbackScreenDPI = i407[8]
  i406.m_DefaultSpriteDPI = i407[9]
  i406.m_DynamicPixelsPerUnit = i407[10]
  i406.m_PresetInfoIsWorld = !!i407[11]
  return i406
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i409 = data
  i408.m_IgnoreReversedGraphics = !!i409[0]
  i408.m_BlockingObjects = i409[1]
  i408.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i409[2] )
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i411 = data
  i410.cullTransparentMesh = !!i411[0]
  return i410
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.UI.Image' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'm_Sprite')
  i412.m_Type = i413[2]
  i412.m_PreserveAspect = !!i413[3]
  i412.m_FillCenter = !!i413[4]
  i412.m_FillMethod = i413[5]
  i412.m_FillAmount = i413[6]
  i412.m_FillClockwise = !!i413[7]
  i412.m_FillOrigin = i413[8]
  i412.m_UseSpriteMesh = !!i413[9]
  i412.m_PixelsPerUnitMultiplier = i413[10]
  request.r(i413[11], i413[12], 0, i412, 'm_Material')
  i412.m_Maskable = !!i413[13]
  i412.m_Color = new pc.Color(i413[14], i413[15], i413[16], i413[17])
  i412.m_RaycastTarget = !!i413[18]
  i412.m_RaycastPadding = new pc.Vec4( i413[19], i413[20], i413[21], i413[22] )
  return i412
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.UI.Text' )
  var i415 = data
  i414.m_FontData = request.d('UnityEngine.UI.FontData', i415[0], i414.m_FontData)
  i414.m_Text = i415[1]
  request.r(i415[2], i415[3], 0, i414, 'm_Material')
  i414.m_Maskable = !!i415[4]
  i414.m_Color = new pc.Color(i415[5], i415[6], i415[7], i415[8])
  i414.m_RaycastTarget = !!i415[9]
  i414.m_RaycastPadding = new pc.Vec4( i415[10], i415[11], i415[12], i415[13] )
  return i414
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.FontData' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'm_Font')
  i416.m_FontSize = i417[2]
  i416.m_FontStyle = i417[3]
  i416.m_BestFit = !!i417[4]
  i416.m_MinSize = i417[5]
  i416.m_MaxSize = i417[6]
  i416.m_Alignment = i417[7]
  i416.m_AlignByGeometry = !!i417[8]
  i416.m_RichText = !!i417[9]
  i416.m_HorizontalOverflow = i417[10]
  i416.m_VerticalOverflow = i417[11]
  i416.m_LineSpacing = i417[12]
  return i416
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i418 = root || request.c( 'UnityEngine.UI.Button' )
  var i419 = data
  i418.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i419[0], i418.m_OnClick)
  i418.m_Navigation = request.d('UnityEngine.UI.Navigation', i419[1], i418.m_Navigation)
  i418.m_Transition = i419[2]
  i418.m_Colors = request.d('UnityEngine.UI.ColorBlock', i419[3], i418.m_Colors)
  i418.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i419[4], i418.m_SpriteState)
  i418.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i419[5], i418.m_AnimationTriggers)
  i418.m_Interactable = !!i419[6]
  request.r(i419[7], i419[8], 0, i418, 'm_TargetGraphic')
  return i418
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i420 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i421 = data
  i420.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i421[0], i420.m_PersistentCalls)
  return i420
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i422 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i423 = data
  var i425 = i423[0]
  var i424 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i425.length; i += 1) {
    i424.add(request.d('UnityEngine.Events.PersistentCall', i425[i + 0]));
  }
  i422.m_Calls = i424
  return i422
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i429 = data
  request.r(i429[0], i429[1], 0, i428, 'm_Target')
  i428.m_TargetAssemblyTypeName = i429[2]
  i428.m_MethodName = i429[3]
  i428.m_Mode = i429[4]
  i428.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i429[5], i428.m_Arguments)
  i428.m_CallState = i429[6]
  return i428
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'm_ObjectArgument')
  i430.m_ObjectArgumentAssemblyTypeName = i431[2]
  i430.m_IntArgument = i431[3]
  i430.m_FloatArgument = i431[4]
  i430.m_StringArgument = i431[5]
  i430.m_BoolArgument = !!i431[6]
  return i430
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i433 = data
  i432.m_Mode = i433[0]
  i432.m_WrapAround = !!i433[1]
  request.r(i433[2], i433[3], 0, i432, 'm_SelectOnUp')
  request.r(i433[4], i433[5], 0, i432, 'm_SelectOnDown')
  request.r(i433[6], i433[7], 0, i432, 'm_SelectOnLeft')
  request.r(i433[8], i433[9], 0, i432, 'm_SelectOnRight')
  return i432
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i435 = data
  i434.m_NormalColor = new pc.Color(i435[0], i435[1], i435[2], i435[3])
  i434.m_HighlightedColor = new pc.Color(i435[4], i435[5], i435[6], i435[7])
  i434.m_PressedColor = new pc.Color(i435[8], i435[9], i435[10], i435[11])
  i434.m_SelectedColor = new pc.Color(i435[12], i435[13], i435[14], i435[15])
  i434.m_DisabledColor = new pc.Color(i435[16], i435[17], i435[18], i435[19])
  i434.m_ColorMultiplier = i435[20]
  i434.m_FadeDuration = i435[21]
  return i434
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'm_HighlightedSprite')
  request.r(i437[2], i437[3], 0, i436, 'm_PressedSprite')
  request.r(i437[4], i437[5], 0, i436, 'm_SelectedSprite')
  request.r(i437[6], i437[7], 0, i436, 'm_DisabledSprite')
  return i436
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i439 = data
  i438.m_NormalTrigger = i439[0]
  i438.m_HighlightedTrigger = i439[1]
  i438.m_PressedTrigger = i439[2]
  i438.m_SelectedTrigger = i439[3]
  i438.m_DisabledTrigger = i439[4]
  return i438
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'm_FirstSelected')
  i440.m_sendNavigationEvents = !!i441[2]
  i440.m_DragThreshold = i441[3]
  return i440
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i443 = data
  i442.m_HorizontalAxis = i443[0]
  i442.m_VerticalAxis = i443[1]
  i442.m_SubmitButton = i443[2]
  i442.m_CancelButton = i443[3]
  i442.m_InputActionsPerSecond = i443[4]
  i442.m_RepeatDelay = i443[5]
  i442.m_ForceModuleActive = !!i443[6]
  return i442
}

Deserializers["DroppingCubeDetector"] = function (request, data, root) {
  var i444 = root || request.c( 'DroppingCubeDetector' )
  var i445 = data
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i447 = data
  i446.name = i447[0]
  i446.atlasId = i447[1]
  i446.mipmapCount = i447[2]
  i446.hdr = !!i447[3]
  i446.size = i447[4]
  i446.anisoLevel = i447[5]
  i446.filterMode = i447[6]
  i446.wrapMode = i447[7]
  var i449 = i447[8]
  var i448 = []
  for(var i = 0; i < i449.length; i += 4) {
    i448.push( UnityEngine.Rect.MinMaxRect(i449[i + 0], i449[i + 1], i449[i + 2], i449[i + 3]) );
  }
  i446.rects = i448
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i453 = data
  i452.name = i453[0]
  i452.index = i453[1]
  i452.startup = !!i453[2]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i455 = data
  i454.ambientIntensity = i455[0]
  i454.reflectionIntensity = i455[1]
  i454.ambientMode = i455[2]
  i454.ambientLight = new pc.Color(i455[3], i455[4], i455[5], i455[6])
  i454.ambientSkyColor = new pc.Color(i455[7], i455[8], i455[9], i455[10])
  i454.ambientGroundColor = new pc.Color(i455[11], i455[12], i455[13], i455[14])
  i454.ambientEquatorColor = new pc.Color(i455[15], i455[16], i455[17], i455[18])
  i454.fogColor = new pc.Color(i455[19], i455[20], i455[21], i455[22])
  i454.fogEndDistance = i455[23]
  i454.fogStartDistance = i455[24]
  i454.fogDensity = i455[25]
  i454.fog = !!i455[26]
  request.r(i455[27], i455[28], 0, i454, 'skybox')
  i454.fogMode = i455[29]
  var i457 = i455[30]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i457[i + 0]) );
  }
  i454.lightmaps = i456
  i454.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i455[31], i454.lightProbes)
  i454.lightmapsMode = i455[32]
  i454.environmentLightingMode = i455[33]
  i454.ambientProbe = new pc.SphericalHarmonicsL2(i455[34])
  request.r(i455[35], i455[36], 0, i454, 'customReflection')
  request.r(i455[37], i455[38], 0, i454, 'defaultReflection')
  i454.defaultReflectionMode = i455[39]
  i454.defaultReflectionResolution = i455[40]
  i454.sunLightObjectId = i455[41]
  i454.pixelLightCount = i455[42]
  i454.defaultReflectionHDR = !!i455[43]
  i454.hasLightDataAsset = !!i455[44]
  i454.hasManualGenerate = !!i455[45]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i461 = data
  request.r(i461[0], i461[1], 0, i460, 'lightmapColor')
  request.r(i461[2], i461[3], 0, i460, 'lightmapDirection')
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i462 = root || new UnityEngine.LightProbes()
  var i463 = data
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i471 = data
  i470.name = i471[0]
  var i473 = i471[1]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i473[i + 0]) );
  }
  i470.passes = i472
  var i475 = i471[2]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i475[i + 0]) );
  }
  i470.defaultParameterValues = i474
  request.r(i471[3], i471[4], 0, i470, 'unityFallbackShader')
  i470.readDepth = !!i471[5]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i478 = root || new pc.UnityShaderPass()
  var i479 = data
  i478.passType = i479[0]
  i478.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[1], i478.zTest)
  i478.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[2], i478.zWrite)
  i478.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[3], i478.culling)
  i478.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i479[4], i478.blending)
  i478.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i479[5], i478.alphaBlending)
  i478.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[6], i478.colorWriteMask)
  i478.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[7], i478.offsetUnits)
  i478.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[8], i478.offsetFactor)
  i478.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[9], i478.stencilRef)
  i478.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[10], i478.stencilReadMask)
  i478.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[11], i478.stencilWriteMask)
  i478.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[12], i478.stencilOp)
  i478.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[13], i478.stencilOpFront)
  i478.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[14], i478.stencilOpBack)
  var i481 = i479[15]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i481[i + 0]) );
  }
  i478.tags = i480
  var i483 = i479[16]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i483[i + 0]) );
  }
  i478.variants = i482
  i478.readDepth = !!i479[17]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i485 = data
  i484.val = i485[0]
  i484.name = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i487 = data
  i486.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[0], i486.src)
  i486.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[1], i486.dst)
  i486.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[2], i486.op)
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i489 = data
  i488.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[0], i488.pass)
  i488.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[1], i488.fail)
  i488.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[2], i488.zFail)
  i488.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[3], i488.comp)
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i493 = data
  i492.name = i493[0]
  i492.value = i493[1]
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i497 = data
  var i499 = i497[0]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( i499[i + 0] );
  }
  i496.keywords = i498
  i496.vertexProgram = i497[1]
  i496.fragmentProgram = i497[2]
  i496.readDepth = !!i497[3]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i505 = data
  i504.name = i505[0]
  i504.type = i505[1]
  i504.value = new pc.Vec4( i505[2], i505[3], i505[4], i505[5] )
  i504.textureValue = i505[6]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'texture')
  i506.aabb = i507[3]
  i506.vertices = i507[4]
  i506.triangles = i507[5]
  i506.textureRect = UnityEngine.Rect.MinMaxRect(i507[6], i507[7], i507[8], i507[9])
  i506.packedRect = UnityEngine.Rect.MinMaxRect(i507[10], i507[11], i507[12], i507[13])
  i506.border = new pc.Vec4( i507[14], i507[15], i507[16], i507[17] )
  i506.transparency = i507[18]
  i506.bounds = i507[19]
  i506.pixelsPerUnit = i507[20]
  i506.textureWidth = i507[21]
  i506.textureHeight = i507[22]
  i506.nativeSize = new pc.Vec2( i507[23], i507[24] )
  i506.pivot = new pc.Vec2( i507[25], i507[26] )
  i506.textureRectOffset = new pc.Vec2( i507[27], i507[28] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i509 = data
  i508.name = i509[0]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i511 = data
  i510.name = i511[0]
  i510.ascent = i511[1]
  i510.originalLineHeight = i511[2]
  i510.fontSize = i511[3]
  var i513 = i511[4]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i513[i + 0]) );
  }
  i510.characterInfo = i512
  request.r(i511[5], i511[6], 0, i510, 'texture')
  i510.originalFontSize = i511[7]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i517 = data
  i516.index = i517[0]
  i516.advance = i517[1]
  i516.bearing = i517[2]
  i516.glyphWidth = i517[3]
  i516.glyphHeight = i517[4]
  i516.minX = i517[5]
  i516.maxX = i517[6]
  i516.minY = i517[7]
  i516.maxY = i517[8]
  i516.uvBottomLeftX = i517[9]
  i516.uvBottomLeftY = i517[10]
  i516.uvBottomRightX = i517[11]
  i516.uvBottomRightY = i517[12]
  i516.uvTopLeftX = i517[13]
  i516.uvTopLeftY = i517[14]
  i516.uvTopRightX = i517[15]
  i516.uvTopRightY = i517[16]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i519 = data
  var i521 = i519[0]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i521[i + 0]) );
  }
  i518.files = i520
  i518.componentToPrefabIds = i519[1]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i525 = data
  i524.path = i525[0]
  request.r(i525[1], i525[2], 0, i524, 'unityObject')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i527 = data
  var i529 = i527[0]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i529[i + 0]) );
  }
  i526.scriptsExecutionOrder = i528
  var i531 = i527[1]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i531[i + 0]) );
  }
  i526.sortingLayers = i530
  var i533 = i527[2]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i533[i + 0]) );
  }
  i526.cullingLayers = i532
  i526.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i527[3], i526.timeSettings)
  i526.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i527[4], i526.physicsSettings)
  i526.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i527[5], i526.physics2DSettings)
  i526.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i527[6], i526.qualitySettings)
  i526.removeShadows = !!i527[7]
  i526.autoInstantiatePrefabs = !!i527[8]
  i526.enableAutoInstancing = !!i527[9]
  i526.lightmapEncodingQuality = i527[10]
  i526.desiredColorSpace = i527[11]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i537 = data
  i536.name = i537[0]
  i536.value = i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i541 = data
  i540.id = i541[0]
  i540.name = i541[1]
  i540.value = i541[2]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i545 = data
  i544.id = i545[0]
  i544.name = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i547 = data
  i546.fixedDeltaTime = i547[0]
  i546.maximumDeltaTime = i547[1]
  i546.timeScale = i547[2]
  i546.maximumParticleTimestep = i547[3]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i549 = data
  i548.gravity = new pc.Vec3( i549[0], i549[1], i549[2] )
  i548.defaultSolverIterations = i549[3]
  i548.bounceThreshold = i549[4]
  i548.autoSyncTransforms = !!i549[5]
  i548.autoSimulation = !!i549[6]
  var i551 = i549[7]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i551[i + 0]) );
  }
  i548.collisionMatrix = i550
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i555 = data
  i554.enabled = !!i555[0]
  i554.layerId = i555[1]
  i554.otherLayerId = i555[2]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'material')
  i556.gravity = new pc.Vec2( i557[2], i557[3] )
  i556.positionIterations = i557[4]
  i556.velocityIterations = i557[5]
  i556.velocityThreshold = i557[6]
  i556.maxLinearCorrection = i557[7]
  i556.maxAngularCorrection = i557[8]
  i556.maxTranslationSpeed = i557[9]
  i556.maxRotationSpeed = i557[10]
  i556.timeToSleep = i557[11]
  i556.linearSleepTolerance = i557[12]
  i556.angularSleepTolerance = i557[13]
  i556.defaultContactOffset = i557[14]
  i556.autoSimulation = !!i557[15]
  i556.queriesHitTriggers = !!i557[16]
  i556.queriesStartInColliders = !!i557[17]
  i556.callbacksOnDisable = !!i557[18]
  i556.reuseCollisionCallbacks = !!i557[19]
  i556.autoSyncTransforms = !!i557[20]
  var i559 = i557[21]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i559[i + 0]) );
  }
  i556.collisionMatrix = i558
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i563 = data
  i562.enabled = !!i563[0]
  i562.layerId = i563[1]
  i562.otherLayerId = i563[2]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i565 = data
  var i567 = i565[0]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i567[i + 0]) );
  }
  i564.qualityLevels = i566
  var i569 = i565[1]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( i569[i + 0] );
  }
  i564.names = i568
  i564.shadows = i565[2]
  i564.anisotropicFiltering = i565[3]
  i564.antiAliasing = i565[4]
  i564.lodBias = i565[5]
  i564.shadowCascades = i565[6]
  i564.shadowDistance = i565[7]
  i564.shadowmaskMode = i565[8]
  i564.shadowProjection = i565[9]
  i564.shadowResolution = i565[10]
  i564.softParticles = !!i565[11]
  i564.softVegetation = !!i565[12]
  i564.activeColorSpace = i565[13]
  i564.desiredColorSpace = i565[14]
  i564.masterTextureLimit = i565[15]
  i564.maxQueuedFrames = i565[16]
  i564.particleRaycastBudget = i565[17]
  i564.pixelLightCount = i565[18]
  i564.realtimeReflectionProbes = !!i565[19]
  i564.shadowCascade2Split = i565[20]
  i564.shadowCascade4Split = new pc.Vec3( i565[21], i565[22], i565[23] )
  i564.streamingMipmapsActive = !!i565[24]
  i564.vSyncCount = i565[25]
  i564.asyncUploadBufferSize = i565[26]
  i564.asyncUploadTimeSlice = i565[27]
  i564.billboardsFaceCameraPosition = !!i565[28]
  i564.shadowNearPlaneOffset = i565[29]
  i564.streamingMipmapsMemoryBudget = i565[30]
  i564.maximumLODLevel = i565[31]
  i564.streamingMipmapsAddAllCameras = !!i565[32]
  i564.streamingMipmapsMaxLevelReduction = i565[33]
  i564.streamingMipmapsRenderersPerFrame = i565[34]
  i564.resolutionScalingFixedDPIFactor = i565[35]
  i564.streamingMipmapsMaxFileIORequests = i565[36]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i575 = data
  i574.weight = i575[0]
  i574.vertices = i575[1]
  i574.normals = i575[2]
  i574.tangents = i575[3]
  return i574
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"playOnAwake":2,"loop":3,"time":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"name":0,"passes":1,"defaultParameterValues":2,"unityFallbackShader":3,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"passType":0,"zTest":1,"zWrite":2,"culling":3,"blending":4,"alphaBlending":5,"colorWriteMask":6,"offsetUnits":7,"offsetFactor":8,"stencilRef":9,"stencilReadMask":10,"stencilWriteMask":11,"stencilOp":12,"stencilOpFront":13,"stencilOpBack":14,"tags":15,"variants":16,"readDepth":17},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"keywords":0,"vertexProgram":1,"fragmentProgram":2,"readDepth":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"35":[36],"37":[36],"38":[36],"39":[36],"40":[36],"41":[36],"42":[43],"44":[2],"45":[12],"46":[12],"47":[12],"48":[12],"49":[12],"50":[12],"51":[12],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[53],"61":[53],"62":[53],"63":[53],"64":[53],"65":[53],"66":[2],"67":[7],"68":[69],"70":[69],"23":[22],"71":[22],"72":[27,22],"73":[7],"74":[27,22],"75":[22],"76":[7,22],"77":[22,27],"78":[22],"79":[22],"80":[22],"26":[23],"28":[27,22],"81":[22],"25":[23],"82":[22],"83":[22],"84":[22],"85":[22],"86":[22],"87":[22],"88":[22],"89":[22],"90":[22],"91":[27,22],"92":[22],"93":[22],"94":[22],"95":[22],"16":[27,22],"96":[22],"97":[30],"98":[30],"31":[30],"99":[30],"100":[2],"101":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","MovingCube","UnityEngine.Rigidbody","GameManager","UnityEngine.GameObject","UnityEngine.AudioClip","UnityEngine.UI.Text","ColorManager","UnityEngine.AudioSource","Settings","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Font","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","DroppingCubeDetector","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2020.3.1f1";

Deserializers.applicationIdentifier = "com.DefaultCompany.StackGameplay";

Deserializers.disableAntiAliasing = false;

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

