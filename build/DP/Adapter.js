"use strict";
var Adpater;
(function (Adpater) {
    let Extenstion;
    (function (Extenstion) {
        Extenstion[Extenstion["Vlc"] = 1] = "Vlc";
        Extenstion[Extenstion["Mp4"] = 2] = "Mp4";
        Extenstion[Extenstion["Flash"] = 3] = "Flash";
        Extenstion[Extenstion["Zbu"] = 4] = "Zbu";
    })(Extenstion || (Extenstion = {}));
    class MediaAdpater {
        constructor(audioType) {
            switch (audioType) {
                case Extenstion.Vlc:
                    this.advancedMediaPlayer = new VlcMediaPlayer;
                    break;
                case Extenstion.Mp4:
                    this.advancedMediaPlayer = new Mp4MediaPlayer;
                    break;
                default:
                    this.advancedMediaPlayer = new VlcMediaPlayer;
                    break;
            }
        }
        play(audioType, fileName) {
            switch (audioType) {
                case Extenstion.Mp4:
                    this.advancedMediaPlayer.playMp4(fileName);
                    break;
                case Extenstion.Vlc:
                    this.advancedMediaPlayer.playVlc(fileName);
                    break;
                default:
                    break;
            }
        }
    }
    class VlcMediaPlayer {
        playVlc(fileName) {
            console.log(`Vlc  is playing ${fileName}`);
        }
        playMp4(fileName) {
        }
    }
    class Mp4MediaPlayer {
        playVlc(fileName) {
        }
        playMp4(fileName) {
            console.log(`mp4  is playing ${fileName}`);
        }
    }
    class Player {
        play(audioType, fileName) {
            if (audioType == Extenstion.Mp4 || audioType == Extenstion.Vlc) {
                this.mediaAdpater = new MediaAdpater(audioType);
                this.mediaAdpater.play(audioType, fileName);
                return;
            }
            if (audioType == Extenstion.Flash) {
                console.log(`flash is playing ${fileName}`);
            }
            else {
                console.log(`cant support ${fileName} 🐷🐷😲😲`);
            }
        }
    }
    var player = new Player;
    player.play(Extenstion.Mp4, 'hello.mp4');
    player.play(Extenstion.Vlc, 'hello.Vlc');
    player.play(Extenstion.Zbu, 'oots.xx');
})(Adpater || (Adpater = {}));
//# sourceMappingURL=Adapter.js.map