(function (cjs, an) {
    var p; // shortcut to reference prototypes
    var lib = {};
    var ss = {};
    var img = {};
    lib.ssMetadata = [{ name: "Безымянный_2_atlas_1", frames: [[0, 0, 1080, 1920]] }];

    (lib.AnMovieClip = function () {
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
        };
        this.play = function () {
            cjs.MovieClip.prototype.play.call(this);
        };
        this.gotoAndStop = function (positionOrLabel) {
            cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
        };
        this.stop = function () {
            cjs.MovieClip.prototype.stop.call(this);
        };
    }).prototype = p = new cjs.MovieClip();
    // symbols:

    (lib.map = function () {
        this.initialize(ss["Безымянный_2_atlas_1"]);
        this.gotoAndStop(0);
    }).prototype = p = new cjs.Sprite();

    (lib.Screen_ = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_2 = function () {
            playSound("screen");
        };

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

        // Слой_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("rgba(255,0,0,0.2)")
            .s()
            .p(
                "AGQInQiugvixgsIgDgBIglgKIgDAAQgGgEgIABIgEgBIgagJIgDAAQgMgBgHgGIgDAAQgUgBgRgGIgDAAQg2gOg1gQIgDAAQgkgGgegLIgEAAIgHAAIgEAAQgQgDgNgHIgDgBQgigJgkgHIgEAAQgNABACgPQgGgEgCgHQgah6gPiKQgfkXgdkfQAbgVAZgZIADgBQAJAPAMANIAAACQEEA8EFA7QCrAnCrATQAhAEAdgIQAAAxADAuIAAAHQAGAHgCARIAAADIAAApIAAADQAGAIgCAQIgBADIAAApIAAAEQAHAHgDAQIAAAEIAAAoIAAAEQAGAJgCASIAAADQACBbAFBYIAAADQAGAIgCAQIAAAEIAAAoIAAAEQAGAHgCARIgBADIAAApIAAADQAHAHgDARIAAADIAAApIAAADQAGAIgCAQIAAADIAAAHIAAAzIgDABQgUAbgVAaIgEABIhFAQIgEAAg"
            );
        this.shape.setTransform(52.1368, 55.125);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("rgba(255,0,0,0.498)")
            .s()
            .p(
                "AGQInQiugvixgsIgDgBIglgKIgDAAQgGgEgIABIgEgBIgagJIgDAAQgMgBgHgGIgDAAQgUgBgRgGIgDAAQg2gOg1gQIgDAAQgkgGgegLIgEAAIgHAAIgEAAQgQgDgNgHIgDgBQgigJgkgHIgEAAQgNABACgPQgGgEgCgHQgah6gPiKQgfkXgdkfQAbgVAZgZIADgBQAJAPAMANIAAACQEEA8EFA7QCrAnCrATQAhAEAdgIQAAAxADAuIAAAHQAGAHgCARIAAADIAAApIAAADQAGAIgCAQIgBADIAAApIAAAEQAHAHgDAQIAAAEIAAAoIAAAEQAGAJgCASIAAADQACBbAFBYIAAADQAGAIgCAQIAAAEIAAAoIAAAEQAGAHgCARIgBADIAAApIAAADQAHAHgDARIAAADIAAApIAAADQAGAIgCAQIAAADIAAAHIAAAzIgDABQgUAbgVAaIgEABIhFAQIgEAAg"
            );
        this.shape_1.setTransform(52.1368, 55.125);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("rgba(255,0,0,0.8)")
            .s()
            .p(
                "AGQInQiugvixgsIgDgBIglgKIgDAAQgGgEgIABIgEgBIgagJIgDAAQgMgBgHgGIgDAAQgUgBgRgGIgDAAQg2gOg1gQIgDAAQgkgGgegLIgEAAIgHAAIgEAAQgQgDgNgHIgDgBQgigJgkgHIgEAAQgNABACgPQgGgEgCgHQgah6gPiKQgfkXgdkfQAbgVAZgZIADgBQAJAPAMANIAAACQEEA8EFA7QCrAnCrATQAhAEAdgIQAAAxADAuIAAAHQAGAHgCARIAAADIAAApIAAADQAGAIgCAQIgBADIAAApIAAAEQAHAHgDAQIAAAEIAAAoIAAAEQAGAJgCASIAAADQACBbAFBYIAAADQAGAIgCAQIAAAEIAAAoIAAAEQAGAHgCARIgBADIAAApIAAADQAHAHgDARIAAADIAAApIAAADQAGAIgCAQIAAADIAAAHIAAAzIgDABQgUAbgVAaIgEABIhFAQIgEAAg"
            );
        this.shape_2.setTransform(52.1368, 55.125);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.shape }] })
                .to({ state: [{ t: this.shape_1 }] }, 1)
                .to({ state: [{ t: this.shape_2 }] }, 1)
                .wait(1)
        );

        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 104.3, 110.3);

    (lib.screen_1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 0, 0);

    (lib.krishka_1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_2 = function () {
            playSound("krishka");
        };

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

        // Слой_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("rgba(255,0,0,0.2)")
            .s()
            .p(
                "AmeYjQgKACACgJQAJgqgXgLIgEAAIgBAAQgCgOAAgOIADAAIAAgEIAAgSIAAgDIAAgdIAAgDIAAgZIAAgDIAAgZIAAgEIAAgYIAAgEIAAgjIAEAAIAAgEIAAgRIAEAAIAAgEQASgbAOgeIABgDIjUg2Qg+gQgegvQhuitgCkXIgCAAQgBhDAAhDIAAgEIAAg8IADAAIAAgDIAAgLIAAgEIAAgxIAEAAIAAgEIAAgcIAAgDIAAgZIADAAIAAgEIAAgYQAekmA5kIQA5kJBTjyQBRjvBxjUQA4hnA6hlQAhg5AtgqQAsgrBBgVQCZATCUAXQA+AtBEAnQBCAlAwA4QBGAfBJAdQBUDQBXDOQgFBBgKBPIAAAEQAWAFASAJQAdA5gKBNIgBAEQgmAQgtAJQgvEUgoEdQgnEWgmEZQgOBtgdBhQgEAOgKAOQhkCNh/B0QgqAlgnAnIgOAMIAAABQgrAFgigGIgDAAQhFgDg6AGIgCABQgXAjgaAfIAAACQhPAIhKAMIAAAcIAAADIAAAnIAAAEIAAADQADATgHAKIABADQACAPgGAGIgBADQgGAKgIAIIAAAuIAAAEIAAADQADAXgGANIgBADQgsA6grA7QgrgEglgKg"
            );
        this.shape.setTransform(81.9299, 158.525);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("rgba(255,0,0,0.498)")
            .s()
            .p(
                "AmeYjQgKACACgJQAJgqgXgLIgEAAIgBAAQgCgOAAgOIADAAIAAgEIAAgSIAAgDIAAgdIAAgDIAAgZIAAgDIAAgZIAAgEIAAgYIAAgEIAAgjIAEAAIAAgEIAAgRIAEAAIAAgEQASgbAOgeIABgDIjUg2Qg+gQgegvQhuitgCkXIgCAAQgBhDAAhDIAAgEIAAg8IADAAIAAgDIAAgLIAAgEIAAgxIAEAAIAAgEIAAgcIAAgDIAAgZIADAAIAAgEIAAgYQAekmA5kIQA5kJBTjyQBRjvBxjUQA4hnA6hlQAhg5AtgqQAsgrBBgVQCZATCUAXQA+AtBEAnQBCAlAwA4QBGAfBJAdQBUDQBXDOQgFBBgKBPIAAAEQAWAFASAJQAdA5gKBNIgBAEQgmAQgtAJQgvEUgoEdQgnEWgmEZQgOBtgdBhQgEAOgKAOQhkCNh/B0QgqAlgnAnIgOAMIAAABQgrAFgigGIgDAAQhFgDg6AGIgCABQgXAjgaAfIAAACQhPAIhKAMIAAAcIAAADIAAAnIAAAEIAAADQADATgHAKIABADQACAPgGAGIgBADQgGAKgIAIIAAAuIAAAEIAAADQADAXgGANIgBADQgsA6grA7QgrgEglgKg"
            );
        this.shape_1.setTransform(81.9299, 158.525);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("rgba(255,0,0,0.8)")
            .s()
            .p(
                "AmeYjQgKACACgJQAJgqgXgLIgEAAIgBAAQgCgOAAgOIADAAIAAgEIAAgSIAAgDIAAgdIAAgDIAAgZIAAgDIAAgZIAAgEIAAgYIAAgEIAAgjIAEAAIAAgEIAAgRIAEAAIAAgEQASgbAOgeIABgDIjUg2Qg+gQgegvQhuitgCkXIgCAAQgBhDAAhDIAAgEIAAg8IADAAIAAgDIAAgLIAAgEIAAgxIAEAAIAAgEIAAgcIAAgDIAAgZIADAAIAAgEIAAgYQAekmA5kIQA5kJBTjyQBRjvBxjUQA4hnA6hlQAhg5AtgqQAsgrBBgVQCZATCUAXQA+AtBEAnQBCAlAwA4QBGAfBJAdQBUDQBXDOQgFBBgKBPIAAAEQAWAFASAJQAdA5gKBNIgBAEQgmAQgtAJQgvEUgoEdQgnEWgmEZQgOBtgdBhQgEAOgKAOQhkCNh/B0QgqAlgnAnIgOAMIAAABQgrAFgigGIgDAAQhFgDg6AGIgCABQgXAjgaAfIAAACQhPAIhKAMIAAAcIAAADIAAAnIAAAEIAAADQADATgHAKIABADQACAPgGAGIgBADQgGAKgIAIIAAAuIAAAEIAAADQADAXgGANIgBADQgsA6grA7QgrgEglgKg"
            );
        this.shape_2.setTransform(81.9299, 158.525);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.shape }] })
                .to({ state: [{ t: this.shape_1 }] }, 1)
                .to({ state: [{ t: this.shape_2 }] }, 1)
                .wait(1)
        );

        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 163.9, 317.1);

    (lib.corbus = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_2 = function () {
            playSound("korpys");
        };

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

        // Слой_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("rgba(0,255,0,0.2)")
            .s()
            .p(
                "AEkVbIgCAAQgCgTAAgTIAAgBQhcAPhlAHIgBACIgcACIgEAAIgzAAIAAABQgVACgWAAIgDAAQgVADgMgGIgEAAIgzAAIgEAAQgQACgJgGQgmgCgjgEQkeghjHh3IgEgBQiahZheiXIgEAAQgPADAEgRIgCgBQh0hkgfi4QgKhegMhcIhGo2IhFo4IgCAAQgCgKAAgKIgBAAQgCgRAAgSIgCAAIgFg3IgCAAQgCgbAAgcIAEAAIAAgDIAAgRQAfhhAxhOQAFgJgFgFQBWhRBog6IAHgCQAfAMAlgaQAfgVAkgOIAAgDQAMgCAKgEIAEgBQDihbEVgqQBUgNBYgJIAAgDIAgAAIAEAAIAOAAIAEAAIAAgDIAhAAIAEAAIAVAAIAEAAIAAgEIA3AAIADAAIAcAAIAEAAIAEAAIAzAAIADAAQAfAAAfACIAAACIATAAIADAAQAUAAAVABIAAACQEqAUDuBPIAEABQD3BGCYClQBGBLgCCTIAAADQACARgGAIQgGAmATgFQAlgMA0AQIAAAHQgPDHgHDPQgbAmgfAjQgeAigLA3IAABPIAAADIAAAfIAAAEIABADQADARgHAHIAAA6IAAADIAAAfIAAADIAAAEQADAQgGAIIAAA6IAAAEIAAAfIAAADIAAAEQACAQgHAIIAAA3IAAADIAAAcIAAADIABAEQADAUgHALIAAA6IAAADIAAAfIAAAEIABADQACARgHAHIAAA7IAAADIAAAEQADAbgGARIAAAHQgXDQh7BpIgBADQgbBGgtAzIAAADIAAAEQACAbgGASQAAAGgCAGQghBEg7AtQiyCLj9BDQggAIgfANQgSAHgMAAQgbAAgEghg"
            );
        this.shape.setTransform(130.6, 140.3957);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("rgba(0,255,0,0.498)")
            .s()
            .p(
                "AEkVbIgCAAQgCgTAAgTIAAgBQhcAPhlAHIgBACIgcACIgEAAIgzAAIAAABQgVACgWAAIgDAAQgVADgMgGIgEAAIgzAAIgEAAQgQACgJgGQgmgCgjgEQkeghjHh3IgEgBQiahZheiXIgEAAQgPADAEgRIgCgBQh0hkgfi4QgKhegMhcIhGo2IhFo4IgCAAQgCgKAAgKIgBAAQgCgRAAgSIgCAAIgFg3IgCAAQgCgbAAgcIAEAAIAAgDIAAgRQAfhhAxhOQAFgJgFgFQBWhRBog6IAHgCQAfAMAlgaQAfgVAkgOIAAgDQAMgCAKgEIAEgBQDihbEVgqQBUgNBYgJIAAgDIAgAAIAEAAIAOAAIAEAAIAAgDIAhAAIAEAAIAVAAIAEAAIAAgEIA3AAIADAAIAcAAIAEAAIAEAAIAzAAIADAAQAfAAAfACIAAACIATAAIADAAQAUAAAVABIAAACQEqAUDuBPIAEABQD3BGCYClQBGBLgCCTIAAADQACARgGAIQgGAmATgFQAlgMA0AQIAAAHQgPDHgHDPQgbAmgfAjQgeAigLA3IAABPIAAADIAAAfIAAAEIABADQADARgHAHIAAA6IAAADIAAAfIAAADIAAAEQADAQgGAIIAAA6IAAAEIAAAfIAAADIAAAEQACAQgHAIIAAA3IAAADIAAAcIAAADIABAEQADAUgHALIAAA6IAAADIAAAfIAAAEIABADQACARgHAHIAAA7IAAADIAAAEQADAbgGARIAAAHQgXDQh7BpIgBADQgbBGgtAzIAAADIAAAEQACAbgGASQAAAGgCAGQghBEg7AtQiyCLj9BDQggAIgfANQgSAHgMAAQgbAAgEghg"
            );
        this.shape_1.setTransform(130.6, 140.3957);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("rgba(0,255,0,0.8)")
            .s()
            .p(
                "AEkVbIgCAAQgCgTAAgTIAAgBQhcAPhlAHIgBACIgcACIgEAAIgzAAIAAABQgVACgWAAIgDAAQgVADgMgGIgEAAIgzAAIgEAAQgQACgJgGQgmgCgjgEQkeghjHh3IgEgBQiahZheiXIgEAAQgPADAEgRIgCgBQh0hkgfi4QgKhegMhcIhGo2IhFo4IgCAAQgCgKAAgKIgBAAQgCgRAAgSIgCAAIgFg3IgCAAQgCgbAAgcIAEAAIAAgDIAAgRQAfhhAxhOQAFgJgFgFQBWhRBog6IAHgCQAfAMAlgaQAfgVAkgOIAAgDQAMgCAKgEIAEgBQDihbEVgqQBUgNBYgJIAAgDIAgAAIAEAAIAOAAIAEAAIAAgDIAhAAIAEAAIAVAAIAEAAIAAgEIA3AAIADAAIAcAAIAEAAIAEAAIAzAAIADAAQAfAAAfACIAAACIATAAIADAAQAUAAAVABIAAACQEqAUDuBPIAEABQD3BGCYClQBGBLgCCTIAAADQACARgGAIQgGAmATgFQAlgMA0AQIAAAHQgPDHgHDPQgbAmgfAjQgeAigLA3IAABPIAAADIAAAfIAAAEIABADQADARgHAHIAAA6IAAADIAAAfIAAADIAAAEQADAQgGAIIAAA6IAAAEIAAAfIAAADIAAAEQACAQgHAIIAAA3IAAADIAAAcIAAADIABAEQADAUgHALIAAA6IAAADIAAAfIAAAEIABADQACARgHAHIAAA7IAAADIAAAEQADAbgGARIAAAHQgXDQh7BpIgBADQgbBGgtAzIAAADIAAAEQACAbgGASQAAAGgCAGQghBEg7AtQiyCLj9BDQggAIgfANQgSAHgMAAQgbAAgEghg"
            );
        this.shape_2.setTransform(130.6, 140.3957);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.shape }] })
                .to({ state: [{ t: this.shape_1 }] }, 1)
                .to({ state: [{ t: this.shape_2 }] }, 1)
                .wait(1)
        );

        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 261.2, 280.8);

    (lib.chan_1 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // timeline functions:
        this.frame_2 = function () {
            playSound("chan");
        };

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

        // Слой_1
        this.shape = new cjs.Shape();
        this.shape.graphics
            .f("rgba(69,255,255,0.2)")
            .s()
            .p(
                "AiGNmIgEAAIgHAAIgEAAQgUADgNgGIgDAAIgEAAIgEAAQgSACgLgFIgDAAIgEAAIgEAAQgRACgIgGIgEAAQkCgejGhaQikhFhiiIQgggsgJhFQgkkTghkWIgBgDQhLg8gThyIgCgBQgCgQAAgRIAEAAIAAgDIAAgUQA6ixCWhXQBjg4BxgrQDkhXEXgiIB4gOIAAgEIAlAAIADAAIALAAIAEAAIAAgDIAkAAIAEAAIASAAIAEAAIAAgDIA2AAIADAAIAaAAIADAAIA7AAIADAAQAfAAAfABIAAACIAPAAIAEAAQAWAAAVACIAAABQEoAUDuBLQDgBICECiQAqAzAGBYIAAAEQADATgHALIAAADQgTBXg2A1IAAAEIAAA5IAAADIABADQACAVgGANIAAAoIAAADIAAAyIAAAEIAAAnIAAADIAAADQACASgGAJIAAAoIAAAEIAAAyIAAADIAAAoIAAADIAAAEQADASgGAJIAAAoIAAADIAAAyIAAADIAAAEQACAVgGAMIAAAEQgIAygVAkQgzBchPA+QixCKj4BCIgEAAIAAACIggAIIgEABQi2AyjfAJIAAACQgdACgdAAIgEAAIhTAAIgEAAIgSAAQgUAAgQgEg"
            );
        this.shape.setTransform(118.9847, 87.4368);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics
            .f("rgba(69,255,255,0.498)")
            .s()
            .p(
                "AiGNmIgEAAIgHAAIgEAAQgUADgNgGIgDAAIgEAAIgEAAQgSACgLgFIgDAAIgEAAIgEAAQgRACgIgGIgEAAQkCgejGhaQikhFhiiIQgggsgJhFQgkkTghkWIgBgDQhLg8gThyIgCgBQgCgQAAgRIAEAAIAAgDIAAgUQA6ixCWhXQBjg4BxgrQDkhXEXgiIB4gOIAAgEIAlAAIADAAIALAAIAEAAIAAgDIAkAAIAEAAIASAAIAEAAIAAgDIA2AAIADAAIAaAAIADAAIA7AAIADAAQAfAAAfABIAAACIAPAAIAEAAQAWAAAVACIAAABQEoAUDuBLQDgBICECiQAqAzAGBYIAAAEQADATgHALIAAADQgTBXg2A1IAAAEIAAA5IAAADIABADQACAVgGANIAAAoIAAADIAAAyIAAAEIAAAnIAAADIAAADQACASgGAJIAAAoIAAAEIAAAyIAAADIAAAoIAAADIAAAEQADASgGAJIAAAoIAAADIAAAyIAAADIAAAEQACAVgGAMIAAAEQgIAygVAkQgzBchPA+QixCKj4BCIgEAAIAAACIggAIIgEABQi2AyjfAJIAAACQgdACgdAAIgEAAIhTAAIgEAAIgSAAQgUAAgQgEg"
            );
        this.shape_1.setTransform(118.9847, 87.4368);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics
            .f("rgba(69,255,255,0.8)")
            .s()
            .p(
                "AiGNmIgEAAIgHAAIgEAAQgUADgNgGIgDAAIgEAAIgEAAQgSACgLgFIgDAAIgEAAIgEAAQgRACgIgGIgEAAQkCgejGhaQikhFhiiIQgggsgJhFQgkkTghkWIgBgDQhLg8gThyIgCgBQgCgQAAgRIAEAAIAAgDIAAgUQA6ixCWhXQBjg4BxgrQDkhXEXgiIB4gOIAAgEIAlAAIADAAIALAAIAEAAIAAgDIAkAAIAEAAIASAAIAEAAIAAgDIA2AAIADAAIAaAAIADAAIA7AAIADAAQAfAAAfABIAAACIAPAAIAEAAQAWAAAVACIAAABQEoAUDuBLQDgBICECiQAqAzAGBYIAAAEQADATgHALIAAADQgTBXg2A1IAAAEIAAA5IAAADIABADQACAVgGANIAAAoIAAADIAAAyIAAAEIAAAnIAAADIAAADQACASgGAJIAAAoIAAAEIAAAyIAAADIAAAoIAAADIAAAEQADASgGAJIAAAoIAAADIAAAyIAAADIAAAEQACAVgGAMIAAAEQgIAygVAkQgzBchPA+QixCKj4BCIgEAAIAAACIggAIIgEABQi2AyjfAJIAAACQgdACgdAAIgEAAIhTAAIgEAAIgSAAQgUAAgQgEg"
            );
        this.shape_2.setTransform(118.9847, 87.4368);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({ state: [{ t: this.shape }] })
                .to({ state: [{ t: this.shape_1 }] }, 1)
                .to({ state: [{ t: this.shape_2 }] }, 1)
                .wait(1)
        );

        this._renderFirstFrame();
    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(0, 0, 238, 174.9);

    // stage content:
    (lib.Безымянный2 = function (mode, startPosition, loop, reversed) {
        if (loop == null) {
            loop = true;
        }
        if (reversed == null) {
            reversed = false;
        }
        var props = new Object();
        props.mode = mode;
        props.startPosition = startPosition;
        props.labels = {};
        props.loop = loop;
        props.reversed = reversed;
        cjs.MovieClip.apply(this, [props]);

        // Слой_2
        this.instance = new lib.Screen_();
        this.instance.setTransform(48.25, 344.3, 1, 1.1106);
        new cjs.ButtonHelper(this.instance, 0, 1, 2);

        this.instance_1 = new lib.chan_1();
        this.instance_1.setTransform(152.25, 302.85, 1, 0.9531, 0, 0, 0, 119, 87.4);
        new cjs.ButtonHelper(this.instance_1, 0, 1, 2);

        this.instance_2 = new lib.screen_1();
        this.instance_2.setTransform(203.5, 308.85, 1, 1, 0, 0, 0, 197.5, 325.7);
        new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [{ t: this.instance_2 }, { t: this.instance_1 }, { t: this.instance }],
                })
                .wait(1)
        );

        // Слой_1
        this.instance_3 = new lib.krishka_1();
        this.instance_3.setTransform(307.05, 180.2, 0.9878, 1.0319, 0, 0, 0, 82.1, 158.6);
        new cjs.ButtonHelper(this.instance_3, 0, 1, 2);

        this.instance_4 = new lib.corbus();
        this.instance_4.setTransform(157.3, 369.15, 1, 1.0649, 0, 0, 0, 130.6, 140.5);
        new cjs.ButtonHelper(this.instance_4, 0, 1, 2);

        this.instance_5 = new lib.map();
        this.instance_5.setTransform(7, -52, 0.3639, 0.3639);

        this.timeline.addTween(
            cjs.Tween.get({})
                .to({
                    state: [{ t: this.instance_5 }, { t: this.instance_4 }, { t: this.instance_3 }],
                })
                .wait(1)
        );

        this._renderFirstFrame();
    }).prototype = p = new lib.AnMovieClip();
    p.nominalBounds = new cjs.Rectangle(207, 223, 193.10000000000002, 423.79999999999995);
    // library properties:
    lib.properties = {
        id: "8032F19699253145A71D9C3039C13065",
        width: 400,
        height: 550,
        fps: 24,
        color: "#FFFFFF",
        opacity: 1.0,
        manifest: [
            { src: "images/Безымянный_2_atlas_1.png", id: "Безымянный_2_atlas_1" },
            { src: "sounds/chan.mp3", id: "chan" },
            { src: "sounds/korpys.mp3", id: "korpys" },
            { src: "sounds/krishka.mp3", id: "krishka" },
            { src: "sounds/screen.mp3", id: "screen" },
        ],
        preloads: [],
    };

    // bootstrap callback support:

    (lib.Stage = function (canvas) {
        createjs.Stage.call(this, canvas);
    }).prototype = p = new createjs.Stage();

    p.setAutoPlay = function (autoPlay) {
        this.tickEnabled = autoPlay;
    };
    p.play = function () {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
    };
    p.stop = function (ms) {
        if (ms) this.seek(ms);
        this.tickEnabled = false;
    };
    p.seek = function (ms) {
        this.tickEnabled = true;
        this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
    };
    p.getDuration = function () {
        return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
    };

    p.getTimelinePosition = function () {
        return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
    };

    an.bootcompsLoaded = an.bootcompsLoaded || [];
    if (!an.bootstrapListeners) {
        an.bootstrapListeners = [];
    }

    an.bootstrapCallback = function (fnCallback) {
        an.bootstrapListeners.push(fnCallback);
        if (an.bootcompsLoaded.length > 0) {
            for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
                fnCallback(an.bootcompsLoaded[i]);
            }
        }
    };

    an.compositions = an.compositions || {};
    an.compositions["8032F19699253145A71D9C3039C13065"] = {
        getStage: function () {
            return exportRoot.stage;
        },
        getLibrary: function () {
            return lib;
        },
        getSpriteSheet: function () {
            return ss;
        },
        getImages: function () {
            return img;
        },
    };

    an.compositionLoaded = function (id) {
        an.bootcompsLoaded.push(id);
        for (var j = 0; j < an.bootstrapListeners.length; j++) {
            an.bootstrapListeners[j](id);
        }
    };

    an.getComposition = function (id) {
        return an.compositions[id];
    };

    an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
        var lastW,
            lastH,
            lastS = 1;
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width,
                h = lib.properties.height;
            var iw = window.innerWidth,
                ih = window.innerHeight;
            var pRatio = window.devicePixelRatio || 1,
                xRatio = iw / w,
                yRatio = ih / h,
                sRatio = 1;
            if (isResp) {
                if ((respDim == "width" && lastW == iw) || (respDim == "height" && lastH == ih)) {
                    sRatio = lastS;
                } else if (!isScale) {
                    if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 1) {
                    sRatio = Math.min(xRatio, yRatio);
                } else if (scaleType == 2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            domContainers[0].width = w * pRatio * sRatio;
            domContainers[0].height = h * pRatio * sRatio;
            domContainers.forEach(function (container) {
                container.style.width = w * sRatio + "px";
                container.style.height = h * sRatio + "px";
            });
            stage.scaleX = pRatio * sRatio;
            stage.scaleY = pRatio * sRatio;
            lastW = iw;
            lastH = ih;
            lastS = sRatio;
            stage.tickOnUpdate = false;
            stage.update();
            stage.tickOnUpdate = true;
        }
    };
    an.handleSoundStreamOnTick = function (event) {
        if (!event.paused) {
            var stageChild = stage.getChildAt(0);
            if (!stageChild.paused || stageChild.ignorePause) {
                stageChild.syncStreamSounds();
            }
        }
    };
    an.handleFilterCache = function (event) {
        if (!event.paused) {
            var target = event.target;
            if (target) {
                if (target.filterCacheList) {
                    for (var index = 0; index < target.filterCacheList.length; index++) {
                        var cacheInst = target.filterCacheList[index];
                        if (
                            cacheInst.startFrame <= target.currentFrame &&
                            target.currentFrame <= cacheInst.endFrame
                        ) {
                            cacheInst.instance.cache(
                                cacheInst.x,
                                cacheInst.y,
                                cacheInst.w,
                                cacheInst.h
                            );
                        }
                    }
                }
            }
        }
    };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
