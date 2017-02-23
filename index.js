window.onload = function () {

    setTimeout(function () {
        var snow = document.querySelector('#snow');
        if (!snow) return;
        snow.emit('kksUpdate', {
            colors: ['#00FF00', '#0000FF']
        });
    }, 3000);


    /**
     * 生成两个圆之间的点
     * @param   {number}   radius   半径范围
     * @param   {boolean} inCircle 是否圆内
     * @returns {number}   res
     */
    function genCirclePoint(radius1, radius2, hei) {
        var rand = Math.random() * Math.PI;
        var xsign = Math.random() > 0.5 ? 1 : -1;
        var r = Math.random() * (radius2 - radius1) + radius1;

        var x = r * Math.sin(rand) * xsign;
        var z = r * Math.cos(rand);
        var p = new THREE.Vector3(x, hei, z);
        return p;
    };


    /**
     * 生成一个焰火
     */
    function genFireWork(pos) {
        var fws = $('<a-entity></a-entity>');
        fws.attr('position', pos.x + ' ' + pos.y + ' ' + pos.z);
        fws.attr('kks-magic', 'preset:fireworks;options:{eColor:"#FF3333"}');
        $('a-scene').append(fws);
    };



    //连续生成焰火
    setInterval(function () {
        var pos = genCirclePoint(50, 70, 0);
        genFireWork(pos);
    }, 1000)



};
