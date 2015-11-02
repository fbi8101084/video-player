(function ($) {
    var videoOptions = {
            muted: false,
            preload: 'auto',
            // auto | metadata | none
            autoplay: true,
            controls: true,
            loop: true,
            poster: 'logo.png',
            height: 240,
            width: 320
        },
        basePath = 'video/';

    $(function () {
        var $video = $('<video/>');

        // 設定 VIDEO 屬性
        $.each(videoOptions, function (name, value) {
            if (typeof value === 'boolean') {
                $video.prop(name, value);
            } else {
                $video.attr(name, value);
            }
        });



        $('#chooseVideos').change(function () {
            var files = this.files;


            if (files.length) {
                $.each(files, function (index, item) {
                    $video.append($('<source/>').attr({
                        type: item.type,
                        src: basePath + item.name
                    }));
                });

                //console.dir(item);
            }

            $('body').append($video);
        });
    });
})(jQuery);