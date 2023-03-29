


// 🔷 [객체화] 생성자 함수 정의 > 실행 > 고블린 '객체' 만들기
    function createObj (_name, _atk, _def, _speed) {
        this.name = _name;
        this.atk = _atk;
        this.def = _def;
        this.speed = _speed
    }

        // [해석]
            // '매개변수'로 받은걸 'key 값' 으로 전달
            // '몬스터' 라는 존재를 '이름', '공격력', '방어력', '속도' 로 표현됨. 
            // 코딩에서는 '객체' 를 활용해서 이렇게 '특정 존재'를 표현 (나는 이게 신기 ⭐⭐)

// 🔷 생성자 함수 실행 해서 객체 만들기 

    let obj = new createObj("고블린" , 100, 100, 10);
        console.log(obj)

    // [원리]
        // '동적할당' : 이건 추가학습 필요 😥
        // new 키워드를 쓰면 > 1) 빈 객체를 만듦 2) 위에서 정의된 생성자 함수를 실행 
            // 3) this 는 빈 객체를 가리킴 4) 그 빈 객체에 생성함수의 매개변수인 key 값을 추가  
    // [부족한 부분]
        // this 
    
    // [객체의 중요성]
        // 개발자는 객체를 잘 다루어야 함. 
        // 객체 = 컴퓨터가 존재를 인식하는 방식


// 🔷 [객체] 객체 안에 있는 '값 가져오기' (📛📛 약함)

    // 1. obj.키이름
    console.log(obj.name)

    // 2. obj.["key이름"]
    console.log(obj["name"])

    // 3. 객체에 있는 'key에 상응하는 값'을 모두 가져오기 ⭐⭐⭐
    for (const key in obj) {
        console.log( "🕵️‍♂️" + obj[key])
        // [결과물]
            // 🕵️‍♂️고블린
            // 🕵️‍♂️100
            // 🕵️‍♂️10
                // 이렇게 key 에 상응하는 value 가 나옴
        // [시사점]
            // 1. obj 를 순회해서 key 를 하나씩 가져와서 line by line 으로 찍힌다. 

        // [주의!] 
            // console.log(obj.key) 이렇게 하면 안 돼
    }




// 🔷 [배열] foreach 사용해서 '값 가져오기'
    let arr = ['메롱','오잉','아자자','으라라', '오캐이']
    arr.forEach( function(item, index) {
        console.log(item, index)
    })
        // [for each 활용법⭐]
            // 첫번째 매개변수 = arrary 에 있는 값 자체가 들어옴 
            // 두번째 매개변수 = index ⭐⭐⭐⭐⭐ 가 들어옴



// 🔷 태그 선택자들 
    // [기능]
        // html 중 '태그' 를 선택해서, 가져와준다. 
        // 이걸, document 의 element 중 하나를 선택한다. 
    // [궁금증] 
        // queryselector 로 태그를 선택한다는 걸 잘 몰랐었어. ⭐⭐⭐⭐⭐ 
            // queryselector 는 영어로 무슨 의미지? 

            // query 자체의 의미 : 질문, 조회 
            // query 의 공학적 의미 : 데이터베이스 운영 시스템이나 GIS를 통해 사용자에 의해 데이터베이스에 질문
                // '데이터 베이스' 에게 물어본다는 것. 
            // SQL 에서 query 의 의미 
                // '데이터베이스' 에게(중) '특정 데이터가 있니?' 라고 묻는 과정 
            // HTML 에서 query 의 의미 
                // 'html 요소' 에게(중) '특정 000' 이 있니? 라고 묻는다. 이때, 000을 내가 선택자로 제공
        // [해석해보기] ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
            // document 중에서 > query (물어볼건데) (뭘 물어봐? : 내가 원하는 document 요소, html 태그가 있는지) 
                // 컴퓨터는 대답하겠지 뭘 알고 싶은데? > ex) 이 클래스가 붙어있는 태그 있니? 이 id 가 붙어있는 태그 있니? ⭐'이 셀렉터에 해당'⭐하는 ⭐"document 요소(html 태그, element)"⭐ 있니?


    // 1. getElement 계열
    
        // 1.1 ById, ByClass 등
        let div2 = document.getElementById("div1")
        console.log(div2)
            // <div id = "div1"><div> 나 태그임   </div></div>


    // 2. document.querySelector 계열 
        // [특징]
            // ⭐ 이걸 많이 씀. 

            let div5 = document.querySelector('#div1') // 'id' 로 > 태그를 선택

            let div5_1 = document.querySelector('div1')  // 'id' 로 > 태그를 선택
                // [해석]  // id 는 '유일' 하므로 > '변수' 처럼 사용 가능 

            let div6 = document.querySelector('.class_div2') // 'class' 로 선택

            let div7 = document.querySelector('div')   // '태그' 를 기준으로 선택



        // 2.2 document.querySelectorAll

            let divArr = document.querySelectorAll(".class_div2");  // 'class' 기준으로 선택
                console.log(divArr[3])  // ⭐⭐ '배열' 로 들어온다는 점 주의


// 🔷 가져온 태그에 내용 넣기 
    
    // 1. innerHTML
        // querySelector 사용
        let div8 = document.querySelector('.class_div2');
        div8.innerHTML = "나 이 클래스 가진 태그 중 첫 번째야";

        // querySelectorAll 사용 > '배열' 사용에 유의
        let div8 = document.querySelectorAll('.class_div2');
        div8[3].innerHTML = "난 class_div2 클래스를 가진 4번째 태그야. 지금 innerHTML 로 수정했어";

        // 태그 사용 가능 ⭐⭐ 
        div1.innerHTML = "<ul><li>나 태그임</ul></li>";






