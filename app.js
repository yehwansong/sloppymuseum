var gUserId;
// wait for auth to finish
var gIsInit = false;

var gLastMoveX = null;
var gLastMoveY = null;
var gTouching = false;

var gFingers = {};
// var qrcode = new QRCode("qrcode");

function makeCode (link) {      
    new QRCode(document.getElementById("qrcode"), link);
}


    var isMobile = false; //initiate as false
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
        || /1207|6310|6590  |3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
        isMobile = true;
    }
    if(!isMobile){
        $('body').append('<div id="background"></div><div id="frontground"></div><div id="finger"></div><div class="pond"></div>')
    }
    // <div id="qrcode"></div>


document.addEventListener("DOMContentLoaded", function() {
    init();
    let w = window.innerWidth;
    let h = window.innerHeight;
    $('body').css({height:h})


    // $('body').on('touchstart', function(e){
    //     gLastMoveX = (e.originalEvent.touches[0].pageX/w) * 100
    //     gLastMoveY = (e.originalEvent.touches[0].pageY/h) * 100
    //     gTouching = true;
    // });

    // $('body').on('touchmove', function(e){
    //     gLastMoveX = (e.originalEvent.touches[0].pageX/w) * 100
    //     gLastMoveY = (e.originalEvent.touches[0].pageY/h) * 100
    // });

    // $('body').on('touchend', function(e){
    //     gTouching = false;
    //     gLastMoveX = null;
    //     gLastMoveY = null;

    //     firebase.database().ref('touches/' + gUserId).remove()
    // });

    // setInterval(function() {
    //     // console.log('interval')
    //     // wait for auth to finish
    //     if(gIsInit === false) {
    //       return;
    //     }


    //     var fingersToDelete = [];
    //     // remove any fingers that haven't been updated nor removed themselves
    //     for(let [key, value] of Object.entries(gFingers)) {
    //         if((new Date().getTime()) - value.now > (1 * 1000)) {
    //             fingersToDelete.push(key);
    //         }
    //     };

    //     fingersToDelete.forEach(userId => {
    //         removeFingerImg(userId);
    //         delete gFingers[userId];
    //     });


    //     if(gTouching === false || gLastMoveX === null || gLastMoveY === null) {
    //         return;
    //     }

    //     firebase.database().ref('touches/' + gUserId + '/').set({
    //         x: gLastMoveX,
    //         y: gLastMoveY,
    //         now: (new Date().getTime()),
    //         hash:randomnumber
    //     });    
    // }, 100);
});

function addFingerImg(userId, pos) {
  $('<img>').attr({
        src: randomElementFromArray([
        'https://yehwansong.github.io/2020touch/img/finger.png',
        'https://yehwansong.github.io/2020touch/img/finger-2.png',
        'https://yehwansong.github.io/2020touch/img/finger-3.png'
    ]),
    id: userId
    }).css({
        'left': pos.x + 'vw',
        'top': (pos.y / 100) * window.innerHeight + 'px'
    }).addClass('finger').appendTo($('body'));
}

function removeFingerImg(userId) {
    $('#finger').css({
        'left': '150vw',
        'top': '-50vh'
    }); 
}

function updateFingerImg(userId, pos) {
    $('#finger').css({
        'left': pos.y + 'vw',
        'top': 0 + 'vh',
        'transform': 'scale('+((100-pos.x)/200 + 0.5) +')' 
    }); 
}

function onTouchHandler(snapshot) {
    let data = snapshot.val()

    if(data === null) {
        Object.keys(gFingers).forEach(userId => {
            removeFingerImg(userId);
        })

        gFingers = {};
        return
    }

    for(let [key, value] of Object.entries(data)) {
    // old finger stuck in db, ignore.
        if((new Date().getTime()) - value.now > (60 * 1000)) {
            continue;
        }

    // don't care about own updates
        if(!isMobile && value.hash == randomnumber){
                console.log('--------------')
                updateFingerImg(key, value)
        }
        gFingers[key] = value;
    }

    let existingFingers = new Set(Object.keys(gFingers));
    let currentUsers = new Set(Object.keys(data));
    let fingersToRemove = setDifference(existingFingers, currentUsers);

    fingersToRemove.forEach(userId => {
        removeFingerImg(userId);
        delete gFingers[userId];
    });
}
function init() {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALXCsdFN4vWO5qac3rUC7rB7BvI8RrYpY",
    authDomain: "esh-museum.firebaseapp.com",
    databaseURL: "https://esh-museum.firebaseio.com",
    projectId: "esh-museum",
    storageBucket: "esh-museum.appspot.com",
    messagingSenderId: "313088058354",
    appId: "1:313088058354:web:b0dd423c97d10e989f816b",
    measurementId: "G-3FRLR9GZXH"
  };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user) {
        console.log('---------')
        console.log(user)
    if (user) {
      gUserId = user.uid;
      gIsInit = true;
        console.log('---------2')

      firebase.database().ref('users/' + gUserId).set({
    username: gUserId
  }, function(error) {
    if (error) {
      console.log('The write failed...')
    } else {
      console.log('Data saved successfully!')
    }
  });
}
  });

  firebase.auth().signInAnonymously().catch(function(error) {
    console.log('sign in error', error);
  });

}

function setDifference(setA, setB) {
  let _difference = new Set(setA)
  for (let elem of setB) {
    _difference.delete(elem)
  }
  return _difference
}

function randomElementFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}
