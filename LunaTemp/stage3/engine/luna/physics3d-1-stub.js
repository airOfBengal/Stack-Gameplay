!function(){class e{constructor(){Goblin.warnOnce()}}pc.PhysicsSystem=class extends pc.UnityComponentSystem{constructor(e){super(e),this.id="physics",this.performanceSamplerSection=pc.Counters.PHYSICS,this._world=Goblin.World.initialize()}setIgnoreCollisionBetweenLayers(){}syncHierarchy(){}syncTransforms(){}},pc.RigidbodySystem=class extends pc.UnityComponentSystem{constructor(e){super(e),this.id="rigidbody",this.performanceSamplerSection=pc.Counters.PHYSICS}},pc.RigidbodyComponent=e,pc.JointSystem=class extends pc.UnityComponentSystem{constructor(e){super(e),this.id="joint",this.performanceSamplerSection=pc.Counters.PHYSICS}},pc.JointComponent=e,pc.ColliderSystem=class extends pc.UnityComponentSystem{constructor(e){super(e),this.id="collider",this.performanceSamplerSection=pc.Counters.PHYSICS}},pc.ColliderComponent=e,pc.BoxColliderComponent=e,pc.SphereColliderComponent=e,pc.MeshColliderComponent=e,pc.CapsuleColliderComponent=e,pc.WheelColliderComponent=e,pc.CharacterControllerComponent=e}();