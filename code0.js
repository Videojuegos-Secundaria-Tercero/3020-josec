gdjs.NIvel_321Code = {};
gdjs.NIvel_321Code.GDMotocrossObjects1= [];
gdjs.NIvel_321Code.GDMotocrossObjects2= [];
gdjs.NIvel_321Code.GDMotocrossObjects3= [];
gdjs.NIvel_321Code.GDNewObject3Objects1= [];
gdjs.NIvel_321Code.GDNewObject3Objects2= [];
gdjs.NIvel_321Code.GDNewObject3Objects3= [];
gdjs.NIvel_321Code.GDpisoObjects1= [];
gdjs.NIvel_321Code.GDpisoObjects2= [];
gdjs.NIvel_321Code.GDpisoObjects3= [];
gdjs.NIvel_321Code.GDbalaObjects1= [];
gdjs.NIvel_321Code.GDbalaObjects2= [];
gdjs.NIvel_321Code.GDbalaObjects3= [];
gdjs.NIvel_321Code.GDbg2Objects1= [];
gdjs.NIvel_321Code.GDbg2Objects2= [];
gdjs.NIvel_321Code.GDbg2Objects3= [];
gdjs.NIvel_321Code.GDbg3Objects1= [];
gdjs.NIvel_321Code.GDbg3Objects2= [];
gdjs.NIvel_321Code.GDbg3Objects3= [];
gdjs.NIvel_321Code.GDbg4Objects1= [];
gdjs.NIvel_321Code.GDbg4Objects2= [];
gdjs.NIvel_321Code.GDbg4Objects3= [];
gdjs.NIvel_321Code.GDbg5Objects1= [];
gdjs.NIvel_321Code.GDbg5Objects2= [];
gdjs.NIvel_321Code.GDbg5Objects3= [];
gdjs.NIvel_321Code.GDbg6Objects1= [];
gdjs.NIvel_321Code.GDbg6Objects2= [];
gdjs.NIvel_321Code.GDbg6Objects3= [];
gdjs.NIvel_321Code.GDbg7Objects1= [];
gdjs.NIvel_321Code.GDbg7Objects2= [];
gdjs.NIvel_321Code.GDbg7Objects3= [];
gdjs.NIvel_321Code.GDbg8Objects1= [];
gdjs.NIvel_321Code.GDbg8Objects2= [];
gdjs.NIvel_321Code.GDbg8Objects3= [];
gdjs.NIvel_321Code.GDbg9Objects1= [];
gdjs.NIvel_321Code.GDbg9Objects2= [];
gdjs.NIvel_321Code.GDbg9Objects3= [];
gdjs.NIvel_321Code.GDbg10Objects1= [];
gdjs.NIvel_321Code.GDbg10Objects2= [];
gdjs.NIvel_321Code.GDbg10Objects3= [];
gdjs.NIvel_321Code.GDfinalbossObjects1= [];
gdjs.NIvel_321Code.GDfinalbossObjects2= [];
gdjs.NIvel_321Code.GDfinalbossObjects3= [];
gdjs.NIvel_321Code.GDwinnerObjects1= [];
gdjs.NIvel_321Code.GDwinnerObjects2= [];
gdjs.NIvel_321Code.GDwinnerObjects3= [];
gdjs.NIvel_321Code.GDganarObjects1= [];
gdjs.NIvel_321Code.GDganarObjects2= [];
gdjs.NIvel_321Code.GDganarObjects3= [];
gdjs.NIvel_321Code.GDNewObjectObjects1= [];
gdjs.NIvel_321Code.GDNewObjectObjects2= [];
gdjs.NIvel_321Code.GDNewObjectObjects3= [];
gdjs.NIvel_321Code.GDBOTSITOObjects1= [];
gdjs.NIvel_321Code.GDBOTSITOObjects2= [];
gdjs.NIvel_321Code.GDBOTSITOObjects3= [];
gdjs.NIvel_321Code.GDvamoooosObjects1= [];
gdjs.NIvel_321Code.GDvamoooosObjects2= [];
gdjs.NIvel_321Code.GDvamoooosObjects3= [];

gdjs.NIvel_321Code.conditionTrue_0 = {val:false};
gdjs.NIvel_321Code.condition0IsTrue_0 = {val:false};
gdjs.NIvel_321Code.condition1IsTrue_0 = {val:false};
gdjs.NIvel_321Code.condition2IsTrue_0 = {val:false};
gdjs.NIvel_321Code.conditionTrue_1 = {val:false};
gdjs.NIvel_321Code.condition0IsTrue_1 = {val:false};
gdjs.NIvel_321Code.condition1IsTrue_1 = {val:false};
gdjs.NIvel_321Code.condition2IsTrue_1 = {val:false};


gdjs.NIvel_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
{gdjs.NIvel_321Code.conditionTrue_1 = gdjs.NIvel_321Code.condition0IsTrue_0;
gdjs.NIvel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8432820);
}
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Jump 004.wav", false, 4, 1);
}}

}


};gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.NIvel_321Code.GDNewObject3Objects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.NIvel_321Code.GDbalaObjects2});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.NIvel_321Code.GDbalaObjects1});gdjs.NIvel_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects2);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDMotocrossObjects2.length;i<l;++i) {
    if ( !(gdjs.NIvel_321Code.GDMotocrossObjects2[i].isFlippedX()) ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDMotocrossObjects2[k] = gdjs.NIvel_321Code.GDMotocrossObjects2[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDMotocrossObjects2.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects2 */
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.NIvel_321Code.GDbalaObjects2);
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects2.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects2[i].getBehavior("FireBullet").Fire((gdjs.NIvel_321Code.GDMotocrossObjects2[i].getPointX("")), (gdjs.NIvel_321Code.GDMotocrossObjects2[i].getPointY("")), gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects2Objects, 0, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Gunshot 002.wav", false, 4, -(2));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDMotocrossObjects1.length;i<l;++i) {
    if ( gdjs.NIvel_321Code.GDMotocrossObjects1[i].isFlippedX() ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDMotocrossObjects1[k] = gdjs.NIvel_321Code.GDMotocrossObjects1[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDMotocrossObjects1.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.NIvel_321Code.GDbalaObjects1);
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("FireBullet").Fire((gdjs.NIvel_321Code.GDMotocrossObjects1[i].getPointX("")), (gdjs.NIvel_321Code.GDMotocrossObjects1[i].getPointY("")), gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects1Objects, 180, 700, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Gunshot 002.wav", false, 4, -(2));
}}

}


};gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects = Hashtable.newFrom({"finalboss": gdjs.NIvel_321Code.GDfinalbossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects = Hashtable.newFrom({"finalboss": gdjs.NIvel_321Code.GDfinalbossObjects1});gdjs.NIvel_321Code.eventsList2 = function(runtimeScene) {

{

/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
/* Reuse gdjs.NIvel_321Code.GDfinalbossObjects1 */

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDfinalbossObjects1.length;i<l;++i) {
    if ( gdjs.NIvel_321Code.GDfinalbossObjects1[i].getX() > (( gdjs.NIvel_321Code.GDMotocrossObjects1.length === 0 ) ? 0 :gdjs.NIvel_321Code.GDMotocrossObjects1[0].getPointX("")) ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDfinalbossObjects1[k] = gdjs.NIvel_321Code.GDfinalbossObjects1[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDfinalbossObjects1.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("Tween").addObjectPositionTween("", (gdjs.NIvel_321Code.GDMotocrossObjects1[i].getPointX("")) - 200, (gdjs.NIvel_321Code.GDMotocrossObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


};gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDwinnerObjects1Objects = Hashtable.newFrom({"winner": gdjs.NIvel_321Code.GDwinnerObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects = Hashtable.newFrom({"finalboss": gdjs.NIvel_321Code.GDfinalbossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.NIvel_321Code.GDNewObject3Objects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.NIvel_321Code.GDNewObject3Objects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.NIvel_321Code.GDbalaObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects = Hashtable.newFrom({"finalboss": gdjs.NIvel_321Code.GDfinalbossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.NIvel_321Code.GDbalaObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects = Hashtable.newFrom({"finalboss": gdjs.NIvel_321Code.GDfinalbossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.NIvel_321Code.GDNewObject3Objects1});gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects = Hashtable.newFrom({"Motocross": gdjs.NIvel_321Code.GDMotocrossObjects1});gdjs.NIvel_321Code.eventsList3 = function(runtimeScene) {

{


gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "battle.wav", true, 1, 1);
}}

}


{


gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);
gdjs.copyArray(runtimeScene.getObjects("ganar"), gdjs.NIvel_321Code.GDganarObjects1);
{for(var i = 0, len = gdjs.NIvel_321Code.GDfinalbossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDfinalbossObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.NIvel_321Code.GDganarObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDganarObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.NIvel_321Code.GDMotocrossObjects1.length !== 0 ? gdjs.NIvel_321Code.GDMotocrossObjects1[0] : null), 0, 0, 10328, 792, true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDMotocrossObjects1.length;i<l;++i) {
    if ( gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDMotocrossObjects1[k] = gdjs.NIvel_321Code.GDMotocrossObjects1[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDMotocrossObjects1.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NIvel_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].flipX(true);
}
}}

}


{


gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.NIvel_321Code.GDNewObject3Objects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects, false, runtimeScene, true);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("Tween").addObjectPositionTween("", (gdjs.NIvel_321Code.GDMotocrossObjects1[i].getPointX("")) - 200, (gdjs.NIvel_321Code.GDMotocrossObjects1[i].getPointY("")) - 20, "easeOutQuart", 500, false);
}
}}

}


{


gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NIvel_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects, 50, false);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects, false, runtimeScene, false);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.NIvel_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("winner"), gdjs.NIvel_321Code.GDwinnerObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDwinnerObjects1Objects, runtimeScene, false, false);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ganar"), gdjs.NIvel_321Code.GDganarObjects1);
{for(var i = 0, len = gdjs.NIvel_321Code.GDganarObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDganarObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects, 500, false);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
/* Reuse gdjs.NIvel_321Code.GDfinalbossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDfinalbossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDfinalbossObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.NIvel_321Code.GDMotocrossObjects1.length === 0 ) ? 0 :gdjs.NIvel_321Code.GDMotocrossObjects1[0].getPointX("")), (( gdjs.NIvel_321Code.GDMotocrossObjects1.length === 0 ) ? 0 :gdjs.NIvel_321Code.GDMotocrossObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.NIvel_321Code.GDNewObject3Objects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects, 500, false);
}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
/* Reuse gdjs.NIvel_321Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDNewObject3Objects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.NIvel_321Code.GDMotocrossObjects1.length === 0 ) ? 0 :gdjs.NIvel_321Code.GDMotocrossObjects1[0].getPointX("")), (( gdjs.NIvel_321Code.GDMotocrossObjects1.length === 0 ) ? 0 :gdjs.NIvel_321Code.GDMotocrossObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.NIvel_321Code.GDNewObject3Objects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDNewObject3Objects1.length;i<l;++i) {
    if ( gdjs.NIvel_321Code.GDNewObject3Objects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDNewObject3Objects1[k] = gdjs.NIvel_321Code.GDNewObject3Objects1[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDNewObject3Objects1.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDNewObject3Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NIvel_321Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDNewObject3Objects1[i].addForce(500, -(700), 1);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "DeathVoice.wav", false, 7, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDfinalbossObjects1.length;i<l;++i) {
    if ( gdjs.NIvel_321Code.GDfinalbossObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDfinalbossObjects1[k] = gdjs.NIvel_321Code.GDfinalbossObjects1[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDfinalbossObjects1.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDfinalbossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDfinalbossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDfinalbossObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.NIvel_321Code.GDfinalbossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDfinalbossObjects1[i].addForce(500, -(700), 0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "DeathVoice.wav", false, 15, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Explosion.wav", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.NIvel_321Code.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.NIvel_321Code.GDbalaObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
gdjs.NIvel_321Code.condition1IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NIvel_321Code.condition0IsTrue_0.val ) {
{
{gdjs.NIvel_321Code.conditionTrue_1 = gdjs.NIvel_321Code.condition1IsTrue_0;
gdjs.NIvel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8457836);
}
}}
if (gdjs.NIvel_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDNewObject3Objects1 */
/* Reuse gdjs.NIvel_321Code.GDbalaObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDNewObject3Objects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.NIvel_321Code.GDbalaObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDbalaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Weapon Making 001.wav", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.NIvel_321Code.GDbalaObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
gdjs.NIvel_321Code.condition1IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDbalaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NIvel_321Code.condition0IsTrue_0.val ) {
{
{gdjs.NIvel_321Code.conditionTrue_1 = gdjs.NIvel_321Code.condition1IsTrue_0;
gdjs.NIvel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8459724);
}
}}
if (gdjs.NIvel_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDbalaObjects1 */
/* Reuse gdjs.NIvel_321Code.GDfinalbossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDfinalbossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDfinalbossObjects1[i].getBehavior("Health").Hit(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.NIvel_321Code.GDbalaObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDbalaObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("finalboss"), gdjs.NIvel_321Code.GDfinalbossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
gdjs.NIvel_321Code.condition1IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDfinalbossObjects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NIvel_321Code.condition0IsTrue_0.val ) {
{
{gdjs.NIvel_321Code.conditionTrue_1 = gdjs.NIvel_321Code.condition1IsTrue_0;
gdjs.NIvel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8460940);
}
}}
if (gdjs.NIvel_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("Health").Hit(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Robot Walk.mp3", false, 80, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.NIvel_321Code.GDNewObject3Objects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
gdjs.NIvel_321Code.condition1IsTrue_0.val = false;
{
gdjs.NIvel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDNewObject3Objects1Objects, gdjs.NIvel_321Code.mapOfGDgdjs_46NIvel_95321Code_46GDMotocrossObjects1Objects, false, runtimeScene, false);
}if ( gdjs.NIvel_321Code.condition0IsTrue_0.val ) {
{
{gdjs.NIvel_321Code.conditionTrue_1 = gdjs.NIvel_321Code.condition1IsTrue_0;
gdjs.NIvel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8461532);
}
}}
if (gdjs.NIvel_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("Health").Hit(5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Robot Walk.mp3", false, 30, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Motocross"), gdjs.NIvel_321Code.GDMotocrossObjects1);

gdjs.NIvel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.NIvel_321Code.GDMotocrossObjects1.length;i<l;++i) {
    if ( gdjs.NIvel_321Code.GDMotocrossObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.NIvel_321Code.condition0IsTrue_0.val = true;
        gdjs.NIvel_321Code.GDMotocrossObjects1[k] = gdjs.NIvel_321Code.GDMotocrossObjects1[i];
        ++k;
    }
}
gdjs.NIvel_321Code.GDMotocrossObjects1.length = k;}if (gdjs.NIvel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.NIvel_321Code.GDMotocrossObjects1 */
{for(var i = 0, len = gdjs.NIvel_321Code.GDMotocrossObjects1.length ;i < len;++i) {
    gdjs.NIvel_321Code.GDMotocrossObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Teleport 001.wav", false, 10, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIvel 1", false);
}}

}


{


{
}

}


};

gdjs.NIvel_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIvel_321Code.GDMotocrossObjects1.length = 0;
gdjs.NIvel_321Code.GDMotocrossObjects2.length = 0;
gdjs.NIvel_321Code.GDMotocrossObjects3.length = 0;
gdjs.NIvel_321Code.GDNewObject3Objects1.length = 0;
gdjs.NIvel_321Code.GDNewObject3Objects2.length = 0;
gdjs.NIvel_321Code.GDNewObject3Objects3.length = 0;
gdjs.NIvel_321Code.GDpisoObjects1.length = 0;
gdjs.NIvel_321Code.GDpisoObjects2.length = 0;
gdjs.NIvel_321Code.GDpisoObjects3.length = 0;
gdjs.NIvel_321Code.GDbalaObjects1.length = 0;
gdjs.NIvel_321Code.GDbalaObjects2.length = 0;
gdjs.NIvel_321Code.GDbalaObjects3.length = 0;
gdjs.NIvel_321Code.GDbg2Objects1.length = 0;
gdjs.NIvel_321Code.GDbg2Objects2.length = 0;
gdjs.NIvel_321Code.GDbg2Objects3.length = 0;
gdjs.NIvel_321Code.GDbg3Objects1.length = 0;
gdjs.NIvel_321Code.GDbg3Objects2.length = 0;
gdjs.NIvel_321Code.GDbg3Objects3.length = 0;
gdjs.NIvel_321Code.GDbg4Objects1.length = 0;
gdjs.NIvel_321Code.GDbg4Objects2.length = 0;
gdjs.NIvel_321Code.GDbg4Objects3.length = 0;
gdjs.NIvel_321Code.GDbg5Objects1.length = 0;
gdjs.NIvel_321Code.GDbg5Objects2.length = 0;
gdjs.NIvel_321Code.GDbg5Objects3.length = 0;
gdjs.NIvel_321Code.GDbg6Objects1.length = 0;
gdjs.NIvel_321Code.GDbg6Objects2.length = 0;
gdjs.NIvel_321Code.GDbg6Objects3.length = 0;
gdjs.NIvel_321Code.GDbg7Objects1.length = 0;
gdjs.NIvel_321Code.GDbg7Objects2.length = 0;
gdjs.NIvel_321Code.GDbg7Objects3.length = 0;
gdjs.NIvel_321Code.GDbg8Objects1.length = 0;
gdjs.NIvel_321Code.GDbg8Objects2.length = 0;
gdjs.NIvel_321Code.GDbg8Objects3.length = 0;
gdjs.NIvel_321Code.GDbg9Objects1.length = 0;
gdjs.NIvel_321Code.GDbg9Objects2.length = 0;
gdjs.NIvel_321Code.GDbg9Objects3.length = 0;
gdjs.NIvel_321Code.GDbg10Objects1.length = 0;
gdjs.NIvel_321Code.GDbg10Objects2.length = 0;
gdjs.NIvel_321Code.GDbg10Objects3.length = 0;
gdjs.NIvel_321Code.GDfinalbossObjects1.length = 0;
gdjs.NIvel_321Code.GDfinalbossObjects2.length = 0;
gdjs.NIvel_321Code.GDfinalbossObjects3.length = 0;
gdjs.NIvel_321Code.GDwinnerObjects1.length = 0;
gdjs.NIvel_321Code.GDwinnerObjects2.length = 0;
gdjs.NIvel_321Code.GDwinnerObjects3.length = 0;
gdjs.NIvel_321Code.GDganarObjects1.length = 0;
gdjs.NIvel_321Code.GDganarObjects2.length = 0;
gdjs.NIvel_321Code.GDganarObjects3.length = 0;
gdjs.NIvel_321Code.GDNewObjectObjects1.length = 0;
gdjs.NIvel_321Code.GDNewObjectObjects2.length = 0;
gdjs.NIvel_321Code.GDNewObjectObjects3.length = 0;
gdjs.NIvel_321Code.GDBOTSITOObjects1.length = 0;
gdjs.NIvel_321Code.GDBOTSITOObjects2.length = 0;
gdjs.NIvel_321Code.GDBOTSITOObjects3.length = 0;
gdjs.NIvel_321Code.GDvamoooosObjects1.length = 0;
gdjs.NIvel_321Code.GDvamoooosObjects2.length = 0;
gdjs.NIvel_321Code.GDvamoooosObjects3.length = 0;

gdjs.NIvel_321Code.eventsList3(runtimeScene);
return;

}

gdjs['NIvel_321Code'] = gdjs.NIvel_321Code;
