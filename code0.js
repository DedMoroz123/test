gdjs.type_45on_95text_95effectCode = {};
gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1= [];
gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects2= [];
gdjs.type_45on_95text_95effectCode.GDNewSpriteObjects1= [];
gdjs.type_45on_95text_95effectCode.GDNewSpriteObjects2= [];

gdjs.type_45on_95text_95effectCode.conditionTrue_0 = {val:false};
gdjs.type_45on_95text_95effectCode.condition0IsTrue_0 = {val:false};
gdjs.type_45on_95text_95effectCode.condition1IsTrue_0 = {val:false};
gdjs.type_45on_95text_95effectCode.condition2IsTrue_0 = {val:false};
gdjs.type_45on_95text_95effectCode.conditionTrue_1 = {val:false};
gdjs.type_45on_95text_95effectCode.condition0IsTrue_1 = {val:false};
gdjs.type_45on_95text_95effectCode.condition1IsTrue_1 = {val:false};
gdjs.type_45on_95text_95effectCode.condition2IsTrue_1 = {val:false};


gdjs.type_45on_95text_95effectCode.eventsList0 = function(runtimeScene) {

{



}


{


gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val = false;
{
gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("text_display"), gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1);
{for(var i = 0, len = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length ;i < len;++i) {
    gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i].resetTimer("TypingSound");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("text_display"), gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1);

gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val = false;
gdjs.type_45on_95text_95effectCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length;i<l;++i) {
    if ( !(gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val = true;
        gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[k] = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i];
        ++k;
    }
}
gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length = k;}if ( gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length;i<l;++i) {
    if ( gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TypingSound") > 0.05 ) {
        gdjs.type_45on_95text_95effectCode.condition1IsTrue_0.val = true;
        gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[k] = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i];
        ++k;
    }
}
gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length = k;}}
if (gdjs.type_45on_95text_95effectCode.condition1IsTrue_0.val) {
/* Reuse gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "blip.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length ;i < len;++i) {
    gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i].resetTimer("TypingSound");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("text_display"), gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1);

gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val = false;
gdjs.type_45on_95text_95effectCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length;i<l;++i) {
    if ( gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i].getBehavior("Text_AutoTyping").TypingFinished((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val = true;
        gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[k] = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i];
        ++k;
    }
}
gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length = k;}if ( gdjs.type_45on_95text_95effectCode.condition0IsTrue_0.val ) {
{
{gdjs.type_45on_95text_95effectCode.conditionTrue_1 = gdjs.type_45on_95text_95effectCode.condition1IsTrue_0;
gdjs.type_45on_95text_95effectCode.condition0IsTrue_1.val = false;
gdjs.type_45on_95text_95effectCode.condition1IsTrue_1.val = false;
{
gdjs.type_45on_95text_95effectCode.condition0IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.type_45on_95text_95effectCode.condition0IsTrue_1.val ) {
    gdjs.type_45on_95text_95effectCode.conditionTrue_1.val = true;
}
}
{
gdjs.type_45on_95text_95effectCode.condition1IsTrue_1.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if( gdjs.type_45on_95text_95effectCode.condition1IsTrue_1.val ) {
    gdjs.type_45on_95text_95effectCode.conditionTrue_1.val = true;
}
}
{
}
}
}}
if (gdjs.type_45on_95text_95effectCode.condition1IsTrue_0.val) {
/* Reuse gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1 */
{for(var i = 0, len = gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length ;i < len;++i) {
    gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1[i].setString("Whenever you change the text," + gdjs.evtTools.string.newLine() + "the typing starts again!");
}
}}

}


};

gdjs.type_45on_95text_95effectCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects1.length = 0;
gdjs.type_45on_95text_95effectCode.GDtext_95displayObjects2.length = 0;
gdjs.type_45on_95text_95effectCode.GDNewSpriteObjects1.length = 0;
gdjs.type_45on_95text_95effectCode.GDNewSpriteObjects2.length = 0;

gdjs.type_45on_95text_95effectCode.eventsList0(runtimeScene);

return;

}

gdjs['type_45on_95text_95effectCode'] = gdjs.type_45on_95text_95effectCode;
