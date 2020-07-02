import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

const data = [
  {
    word: "電話がかかって",
    dictionaryEntries: [
      {
        lemmas: [
          "電話が掛かる（でんわがかかる）",
          "電話がかかる（でんわがかかる）",
        ],
        japaneseGlosses: [],
        englishGlosses: ["to get a phone call"],
      },
    ],
  },
  {
    word: "電話",
    dictionaryEntries: [
      {
        lemmas: ["電話（でんわ）"],
        japaneseGlosses: [
          "<英> ring <a person> up.〜をかけちがえる dial a wrong number;misdial.〜を切る hang up;ring off.‖電話加入者 a telephone subscriber.電話交換手 a telephone operator.電話室 a telephone booth.電話線 a telephone wire.電話帳 a telephone book[ <英> directory].電話番号 a telephone number.電話料 telephone charges.共同電話 (a telephone on) a party line.市内(外)電話 a local (an out-of-town) call.留守番電話 an answerphone.",
          "〔telephone〕",
          "（１）電話機で通話すること。また，その通話。「―をかける」「―して問い合わせる」",
          "〔1876年アメリカのベルが実用化に成功。日本では電話事業は明治以降国営であったが，第二次大戦後，国内通話は日本電信電話公社（のち民営化），国際通話は国際電信電話株式会社が運営。1985年（昭和60）電気通信事業法の制定により，独占的運営が終了し，競争原理が導入された〕",
          "（２）「電話機」の略。「―をとる」",
        ],
        englishGlosses: [
          "telephone call",
          "phone call",
          "telephone (device)",
          "phone",
          "a (tele)phone.→英和",
          "〜がある(をひく) have a telephone (installed).→英和",
          "〜が通じる a (telephone) call goes through.〜が遠い The voice is not distinct.〜口へ呼び出す call <a person> to the telephone.〜で <talk> by[over the]telephone.〜に出る answer the telephone.〜をかける call <a person> up <on the phone> ;(tele)phone;give <a person> a call[ring];→英和",
        ],
        accents: ["デンワ [0]"],
      },
    ],
  },
  {
    word: "話",
    dictionaryEntries: [
      {
        lemmas: [
          "話（はなし）",
          "話し（はなし）",
          "咄（はなし）",
          "噺（はなし）",
        ],
        japaneseGlosses: [
          "（１）話すこと。口に出して語ること。「―がとぎれる」「―が上手だ」「ひそひそ―」",
          "（２）話された内容。「実のある―」「つまらない―」",
          "（３）話題。「―を変える」「その―はやめよう」",
          "（４）うわさ。評判。「耳寄りな―」「次の選挙に出るという―だ」",
          "（５）話し合って決めるべき事柄。",
          " （ア）相談ごと。「―をもち込む」「―に乗る」",
          " （イ）交渉ごと。「―をまとめる」「―をつける」",
          "（６）人に語り聞かせる，ある内容や筋をもった事柄。",
          " （ア）昔ばなしや説話など。「土地に伝わる―」「桃太郎の―」",
          " （イ）講演。演説。",
          " （ウ）落語。小咄。《咄・噺》「人情―」「芝居―」",
          " （エ）談話。「大臣の―」",
          "（７）物の道理。「―のわかる人」",
          "（８）いきさつ。事情。「その―というのを聞かせなさい」",
          "（９）つくりごと。うそ。「あんなのはただの―さ」",
          "（１０）（形式名詞のように用いて）こと。ことがら。「こんなことで苦労するとはつまらない―だ」",
          "〜がうますぎる be too good to be true.〜がつく come to terms[an understanding] <with> .",
          "〜をする　⇒話す.",
          "…という〜だ it is said[they say,I hear]that….",
          "お〜中 <電話>  <米> The line is busy; <英> The number is engaged.お〜をする tell a story.",
        ],
        englishGlosses: [
          "talk",
          "speech",
          "chat",
          "conversation",
          "(made-up) story",
          "tale",
          "yarn",
          "discussions",
          "negotiation",
          "argument",
          "(1)[談話]a talk;→英和",
          "a conversation;→英和",
          "a speech;→英和",
          "a chat (雑談).→英和",
          "(2)[物語]a story;→英和",
          "an account.→英和",
          "(3)[噂]a rumor.→英和",
          "〜がじょうず(へた)である be a good (poor) talker.ちょっと〜がある have something to talk to a person.→英和",
          "〜を変える change the subject.→英和",
          "〜をつける have an understanding <with a person> ;→英和",
          "settle <a matter> .→英和",
        ],
        accents: ["ハナシ↓ [3]"],
      },
      {
        lemmas: ["話（わ）"],
        japaneseGlosses: [
          "〔近世語。「わ」と表記されることが多い〕",
          "係助詞「は」の文末用法。文末にあって終助詞的に用いられ，話し手自身に対して，念を押すような気持ちでの詠嘆の意を表す。「拝ませいで無念なわい，口惜しい―と歯ぎしみし/浄瑠璃・大経師（上）」「左様極つて居てみりやあ，間違ひ引はありません―ね/人情本・清談若緑」",
          "〔現代語の終助詞「わ」のもとになるもの〕→は（係助）",
          "〔上代語〕",
          "文節末にあって，発言内容に対する確認を表す。「いざ吾君(アギ)振熊(フルクマ)が痛手負はずは鳰鳥(ニオドリ)の淡海の湖に潜(カズ)きせな―/古事記（中）」「うるはしき十羽(トバ)の松原童どもいざ―出で見む/万葉 3346」",
          "（１）五十音図ワ行第一段の仮名。両唇の間を狭めて発する半母音と後舌の広母音とから成る音節。",
          "（２）平仮名「わ」は「和」の草体。片仮名「ワ」は「和」の旁(ツクリ)「口」の草体から（一説に，「輪」を示す記号「〇」を二筆で書いたものからとも）。",
          "■一■ （感）",
          "驚いたときや人を驚かせるときなどに発する語。わあ。わっ。「―，お化けだぞう」「―，こわい」",
          "■二■ （副）",
          "笑い出す声や泣き出す声を表す語。「敵も味方も―とぞ笑ひける/平家（一六・長門本）」",
          "〔文末に用いられた係助詞「は」からの転。中世末期以降の語〕",
          "活用語の終止形に接続する。",
          "（１）（女性用語として）話し手の主張や決意を，表現をやわらげて軽く言い表す。「おもしろい―ね」「あら，困った―」「別のやり方のほうがいいと思う―」",
          "（２）軽い詠嘆や驚きなどの気持ちを表す。「ほんとうによくやる―，あの男は」「これは驚いた―」",
          "（３）感動の意を表しながら並べあげる場合に用いる。「腹はへる―，足は棒になる―で，もうさんざんな遠足だった」「ひき出しをあけたら，ある―，ある―，札束がぎっしりだ」→は（係助）",
        ],
        englishGlosses: ["counter for stories, episodes of TV series, etc."],
        accents: ["ワ↓ [1]"],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Dictionary dictionaryQueryResults={data}></Dictionary>
    </div>
  );
}

export default App;
