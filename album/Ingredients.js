let ontto100 =`

<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
<option value="32">32</option>
<option value="33">33</option>
<option value="34">34</option>
<option value="35">35</option>
<option value="36">36</option>
<option value="37">37</option>
<option value="38">38</option>
<option value="39">39</option>
<option value="40">40</option>
<option value="41">41</option>
<option value="42">42</option>
<option value="43">43</option>
<option value="44">44</option>
<option value="45">45</option>
<option value="46">46</option>
<option value="47">47</option>
<option value="48">48</option>
<option value="49">49</option>
<option value="50">50</option>
<option value="51">51</option>
<option value="52">52</option>
<option value="53">53</option>
<option value="54">54</option>
<option value="55">55</option>
<option value="56">56</option>
<option value="57">57</option>
<option value="58">58</option>
<option value="59">59</option>
<option value="60">60</option>
<option value="61">61</option>
<option value="62">62</option>
<option value="63">63</option>
<option value="64">64</option>
<option value="65">65</option>
<option value="66">66</option>
<option value="67">67</option>
<option value="68">68</option>
<option value="69">69</option>
<option value="70">70</option>
<option value="71">71</option>
<option value="72">72</option>
<option value="73">73</option>
<option value="74">74</option>
<option value="75">75</option>
<option value="76">76</option>
<option value="77">77</option>
<option value="78">78</option>
<option value="79">79</option>
<option value="80">80</option>
<option value="81">81</option>
<option value="82">82</option>
<option value="83">83</option>
<option value="84">84</option>
<option value="85">85</option>
<option value="86">86</option>
<option value="87">87</option>
<option value="88">88</option>
<option value="89">89</option>
<option value="90">90</option>
<option value="91">91</option>
<option value="92">92</option>
<option value="93">93</option>
<option value="94">94</option>
<option value="95">95</option>
<option value="96">96</option>
<option value="97">97</option>
<option value="98">98</option>
<option value="99">99</option>
<option value="100">100</option>
  </select>`
$(getdata(function(data){
    for(let i=0;i<data.recipes.length;i++){
        let tlist=$(".container2");
        let ttext;
        ttext=`<div class="flex"><div class="red"><p>`+data.recipes[i].title+`</p></div> <div class='right blue' onclick="deleteRecipe(${i})">刪除</div>`
        for( let j=0;j<data.recipes[i].ingredient.length;j++){
            ttext+=`<div class='left'>`+data.recipes[i].ingredient[j]+`</div>`;
            ttext+=`<div class='right N${i} small' >`+my(data.recipes[i].measure[j])+`</div><br>`;
        }
        ttext+=""+`<label for="N${i}">份數:</label><select style=" margin-bottom: 0px;"id="N${i} ">`+ontto100+"</div><hr></div>"
        tlist.append(ttext);
    }
 }
 ))
 
function my(data){

    if (!isNaN(data.split('/')[1]))
        data=data.split('/')[0]/data.split('/')[1];
    if(!isNaN(data))
        return `<div class=num org='${data}'>${data}</div>`;
    else{
        let pro= processString(data)
        if(pro.quantity!=undefined&&pro.unit!=undefined){
        return `<div class=num org='${pro.quantity}'>${pro.quantity}</div>${pro.unit}`;
        }
        else return `<div class=num org='1'>1</div>${data}`;
    }

}
//單位換算
 function processString(str) {
    var result = { quantity: undefined, unit: undefined };
  
    var regex = /(\d+(?:\/\d+)?)(\s*)([a-zA-Z]+)/; // 正则表达式匹配数字和单位
  
    var match = regex.exec(str);
    if (match) {
      var num = match[1];
      if (num.includes('/')) {
        // 处理分数
        var fraction = num.split('/');
        result.quantity = parseFloat(fraction[0]) / parseFloat(fraction[1]);
      } else {
        result.quantity = parseFloat(num);
      }
  
      result.unit = match[3].trim();
    }
  
    return result;
  }


  $("select").change(function (e) { 
    var selectedOption = $(this).val(); // 獲取被選中的選項的值
    var selectedText = $(this).find("option:selected").text();
   
    var cn = $(this).attr("id").split('N')[1];

    $.each($(`div.N${cn}`), function (indexInArray, valueOfElement) { 
        var $valueOfElement = $(valueOfElement); // Wrap the DOM element in a jQuery object
        let ttex=$valueOfElement.find(".num").attr('org');
        $valueOfElement.find(".num").text(ttex*selectedText);
    });
    // $(`.${cn}`).each(function() {
    //     // 获取元素的文本值
    //     console.log("hi");
    //     var text = $(this).text();
        
    //     // 将文本值转换为数字，并乘以 5
    //     var multipliedText = parseFloat(text) * selectedText;
        
    //     // 将结果赋值给元素的文本
    //     $(this).text(multipliedText);
    //   });
    
  });


