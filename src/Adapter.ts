namespace Adpater {
    enum Extenstion {
        Vlc = 1,
        Mp4 = 2,
        Flash = 3,
        Zbu = 4,

    }
    interface MediaPlayer {
        play(audioType: Extenstion, fileName: string): void;

    }
    interface AdvancedMediaPlayer {
        playVlc(fileName: String): void;
        playMp4(fileName: String): void;
    }
    class MediaAdpater implements MediaPlayer {
        advancedMediaPlayer: AdvancedMediaPlayer;

        constructor(audioType: Extenstion) {
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
        play(audioType: Extenstion, fileName: string): void {
            switch (audioType) {
                case Extenstion.Mp4:
                    this.advancedMediaPlayer.playMp4(fileName)
                    break;
                case Extenstion.Vlc:
                    this.advancedMediaPlayer.playVlc(fileName)
                    break;
                default:
                    break;
            }
        }

    }

    class VlcMediaPlayer implements AdvancedMediaPlayer {
        playVlc(fileName: String): void {
            console.log(`Vlc  is playing ${fileName}`)
        }
        playMp4(fileName: String): void {
            // do nothing
        }

    }

    class Mp4MediaPlayer implements AdvancedMediaPlayer {
        playVlc(fileName: String): void {
            // do nothing
        }
        playMp4(fileName: String): void {
            console.log(`mp4  is playing ${fileName}`)
        }

    }
    class Player implements MediaPlayer {
        mediaAdpater: MediaAdpater;

        play(audioType: Extenstion, fileName: string) {
            if (audioType == Extenstion.Mp4 || audioType == Extenstion.Vlc) {
                this.mediaAdpater = new MediaAdpater(audioType);
                this.mediaAdpater.play(audioType, fileName);
                return;
            }
            if (audioType == Extenstion.Flash) {
                console.log(`flash is playing ${fileName}`)
            } else {
                console.log(`cant support ${fileName} 🐷🐷😲😲`)
            }
        }
    }

    var player = new Player;
    player.play(Extenstion.Mp4, 'hello.mp4')
    player.play(Extenstion.Vlc, 'hello.Vlc')
    player.play(Extenstion.Zbu, 'oots.xx')



}