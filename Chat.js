function Get_message() {
    let message_get = document.getElementById("message");
    let message = message_get.value;
    let vocab = ["来てくれて嬉しいわァ", "よろしくね!", "ご苦労様ねぇ", "あたしのお弁当のお気に入りは鶏のから揚げよ!", "ぼちぼちでんなぁ", "まぁ!!", "ねぇ、\"お姉ちゃん\"って呼んでみて?", "おやすみなさい、\n\n夜更かしは美容の大敵なのよ\n\nまた明日、お話しましょ?", "あらあら、\n\nいけない子ねぇ。\n\n女の子がこんな時間まで何してるのかしら??", "ウフフッ", "あらあらあら!!\n\nあんたもあたしの魅力にメロメロってことなのかしらァ?"];
    let reserved = {こんにちは:vocab[0],
        はろー:vocab[0], 
        Hello:vocab[0], 
        hello:vocab[0], 
        ハロー:vocab[0], 
        おはよう:vocab[0], 
        よろしくね:vocab[1], 
        よろしく:vocab[1], 
        からあげ:vocab[3], 
        お腹すいた:vocab[3], 
        "最近どう?":vocab[4], 
        好き:vocab[10], 
        大好き:vocab[10], 
        愛してる:vocab[10], 
        お姉ちゃん:vocab[5], 
        鳴上嵐:vocab[6], 
        嵐ちゃん:vocab[6], 
        疲れた:vocab[2], 
        お疲れ様:vocab[2], 
        おやすみ:vocab[7], 
        おやすみなさい:vocab[7], 
        眠い:vocab[7]};
    let file_sets = ["hello.wav", "yoroshiku.wav", "gokurousama.wav", "karaage.wav", "bochibochi.wav", "maa.wav", "onechan.wav", "sleep.wav", "angry.wav", "laugh.wav", "miryoku.wav"];
    let file_link = {こんにちは:file_sets[0], 
        はろー:file_sets[0], 
        Hello:file_sets[0], 
        hello:file_sets[0], 
        ハロー:file_sets[0], 
        おはよう:file_sets[0], 
        よろしくね:file_sets[1], 
        よろしく:file_sets[1], 
        からあげ:file_sets[3], 
        お腹すいた:file_sets[3], 
        "最近どう?":file_sets[4], 
        好き:file_sets[10], 
        大好き:file_sets[10], 
        愛してる:file_sets[10],  
        お姉ちゃん:file_sets[5], 
        鳴上嵐:file_sets[6], 
        嵐ちゃん:file_sets[6], 
        疲れた:file_sets[2], 
        お疲れ様:file_sets[2], 
        おやすみ:file_sets[7], 
        おやすみなさい:file_sets[7], 
        眠い:file_sets[7]};

    let chat_details = document.getElementById("chat_details");

    let li = document.createElement("li");
    li.className = "my-message";
    li.innerHTML = message;

    chat_details.appendChild(li);

    console.log(reserved.message);

    if(message in reserved) {
        let arashi_li = document.createElement("li");
        arashi_li.className = "arashi-message";
        arashi_li.innerHTML = reserved[message];
        chat_details.appendChild(arashi_li);

        const audio = new Audio('audio/'+file_link[message]);
        audio.play();
    } else {
        let num = Math.floor( Math.random() * vocab.length );
        let arashi_li = document.createElement("li");
        arashi_li.className = "arashi-message";
        arashi_li.innerHTML = vocab[num];
        chat_details.appendChild(arashi_li);

        const audio = new Audio('audio/'+file_sets[num]);
        audio.play();
    }

    $('ul').delay(100).animate({
        scrollTop: $(document).height()
    },500);

    message_get.value = "";
}