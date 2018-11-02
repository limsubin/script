        var windowWidth = 200;
        var b = document.getElementsByName("text");

        function inp(a) {

            b[0].value += a;

        }

        function sub() {
            b[0].value = eval(b[0].value);
        }

        function clear1(str) {


            b[0].value = "";

        }

        function backs() {

            var c = b[0].value.substr(0, b[0].value.length - 1);

            b[0].value = c;
        }

        function onehundred() {

            x = form.type.value

            if (x == "") alert('입력값을 넣으세요.')

            else if (x == "0") alert('오류입니다.')

            else form.type.value = form.type.value += '00'

        }
