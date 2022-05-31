function checkInclusion(s1: string, s2: string): boolean {
  const offset = 'a'.charCodeAt(0);

  const s1map = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1map[s1.charCodeAt(i) - offset] += 1;
  }

  const s2map = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s2map[s2.charCodeAt(i) - offset] += 1;
  }

  if (matches(s1map, s2map)) return true;

  for (let i = 1; i <= s2.length - s1.length; i++) {
    const head = s2.charCodeAt(i - 1) - offset;
    const tail = s2.charCodeAt(i - 1 + s1.length) - offset;

    s2map[head] -= 1;
    s2map[tail] += 1;

    if (matches(s1map, s2map)) return true;
  }

  return false;
}

function matches(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(checkInclusion('adc', 'dcda'));

// console.log(
//   checkInclusion(
//     'tivgqswqmviletlomdojhngauvxduwgeqzjtihgdzxgczqphjjnrzntyivtpcpijrvyfeshbqbxzbuocdthreyikarjayktsgfvzpglbbuxxrxeumgxemspnagxtskvzvsvnkngsoaakiucksugcernxuqcbyzljvgnogxmodasqcvtmbiwiekntfalzrwnatpsdlqrwropxahmnigzpyrjlmucdbjgbgkoryiptjnuxmlukeqrenvncidktgafvxglmpteecytyfzngzgwmmmjtafgblawqsynhuzlvpgrvmnufsyqbottfdahnkmjlgjazfvvfktvowocrotcgdndvfujvejvvuhpoisaugjuugnvqhzmmxgpaiapxaexlfvymcuwjmnergdcpxhzwamtcakkluwoetwnsynblwmuuetsmmqurykkulyoccoswggplnumrgjwojxanznhfhjymunwllihvpmmorxheaskwljthdnkmpywlnxpgrzzcjrrkevcyskdkapgvvdagizykznzqdxoapxmngsmooqbvimrfttmjcns',
//     'oxjpbkbjgvkxejowukuhulglusrjaeotimsfnfkysgtqjjfpvmhjkemfrnygwkquznthgznigouhznlylexmdgfrrznhjnbatrtxbgbiypsrtbndhzkofniivtwjdxamwienxxbetvfzcbmutrksjltsmpavjobipmmalibntgasxmuzejinnuxecduzvepdbikjjizktgebbmojfikzpmqyocoibwtqfhwutxzowzuvcizvmryukztvpzbdtussrpkofulfbiawyofcksrbhhnrytauddjdssipypnqepftzfkvdemhnpindikkfkijlvlkhdgdmmilbswpefawneibrbclkmuzodwatelmyhuzzreqibhbzrhpfuhyijhzziywjukuzuceqpubfpldzydqmmmrdhbyygegrdytbtrfvwaihsdaavckseosrkoplrpsnlqpuuhgtjesxdzcodptkinjuaidnavrhzdhlymmzmsosqlcyaqgkwtitrenllekrywjzkbrfqasyyaifwdxiacwjixiksnoozkpjsakierftnjimbklegdluisbacwdoqrhrpollmqilinamlltytudelonnozkgfwlhumjcbwenatervgtpalompefhcyrfedxfujmmmzzfshforbvijwydfrojjxefqatpviosbvofkmhnrhefpsqoaxcjxakjtgffphssgjxooxfzlihxtxussvhbvmihenvzojmsscarelmtyavwolzgsaanyqhzaklvqcyxzuptquvhvrjotopftmkqiynjioytaeonymisnilfbrtabifivcmtlauyqghtksersfrjhgolsjvzamiicpsjmiomzcoooluhwqxgwigvkcijrxiwperfiarrxeoefwyypwymzapwlvcybkteqdmydueonshnqtziodhwatepmywkvrwjniogqstqmviletlomdojhngauvxdupgnqzjtihgdzxgczqphjjnrzntyivtpcpijrmyfeshmqbxzbuocdthweyikarjayatsgfvkpglebuhsrxeumgxemxpnagxtskvzvsvnrngsoaakiucksugcernxuqcbuzljvgnomxmouasqvvtmbiribknwfalzrwtatpsdlqrjropxahmnigzpyrjlmucfbjgbgkorciptjnuxglukeqreevogydktgkdvxglmpteecytyfzngzgwmmtjtadgblawqsyvhuzlvpgkvmnufsnqbonnfdhhnkmrlgjazfnvfwtvowncrvtccdndvfujxejvvyhpoisaugjuugtvqhzvzvgpaiapxeexlznymcuwwmnergdcpxhzwamtcakkluwoetwnsinblwmuuebsmmqurykkylyoccoswggplndmrgjkojxayztxfhjymunwllihvpmmojxhqaskwljtadnkmpywlnxpgrzzcjrrkavcyskdzawgvvdmgimykfnzqfxoapxangsmooebvimrfttmjcusqrsnsylfkroqehtxtwwoipyjvpdxaqiuvmcrchhmzosnpddgxjxiftxvhgzefosjptdtkdwxjxugcmgnhlnkcifzphodnqrmbgoakbmlaxifmburvxnspqbpoansvhofxvbnzrmodizuawhtmvcbaeqzrxyvhhxtaqdqinaoykrjhebyljqewdxfurqfsoavdekujqzbkeqgyqzgeikljybmbajjefrnobiendssudpdmfuoffpdetsaepcivxmllufdgutwypcwcbiilgzrlzqqyyntgmtylqgpvlzfdqwviiqrfpxodmfodqgmpxbtkqvypwoqymnhuywkyzwdpaxewimesymojapavboblcomhbdywfthgtqhxabmubxcuzrrxjrfpzdbdjrynrgdpederxsapxbbikenkdmriqifsqqzqyzrcvbgqrmppygzigojccstwunljsdssfwescplglunrvrlimuafofwcyhlpbtoqyuzvxwrpattzpnwuhymbgplnknqznwjrdwclxuaeldbyrisjddshqnyporwnvjypsjypsdgjifbszalilfvvrrokqdiygluxprovcirbtzbtkwojihuwrhjrhtkepncitjsafgzdatkgsfhmkujbagnpgarhqpsrosymvpaewqgjgydqtxxjxzyneirrobwanhqnkmuusssnroznteeodtzkcsiprqueeaeecxvbhizgzbnyudxlrkafobyexvnfcqbdnixhtgfewiwikhngtsuphiglpfqdhcphoysjhnbuacdakybdceirnrgljuppcheczoblstclaswjcrjjwcfhspncuzbhptenkfosdmrfvzfleaczzlpsepmdosluuoczhxzakeovxvkdyvkwbqmknvnocdgywhxqeztdvwinqiydzaxytxgqzxdqibihagybivulxuzppgulxodfdntqgjezmqymebpcdyivduuooosfcsvhwtvziavqtwtwgyxiirffetjikomjaxxbzwxgtvoxzryndgbbldilphthxhugbjrzxygijlvfppiuffopgqkedrlesllclcislnwmfnfrodettzannvdrzfmigtaqryjjnhrywjpugkkmozgyuxkadrygttbdfgtgzripbawbizshhaunnlsqxvnuwgjwxifgxvcebtawuejmfwstiqwzzfhvvviforzaoszdquryfqnieipdjxovsokiiozewvmrgoequsvmspdzrhadafaiyrfrnlnjtytudfkfeqzgnovbtcpnlazpgccofexuztfprbszugoqcrtyswqlrndaoyodbauyusmybtfnvsulgbtgadevgkjmstlmvbzayxomrlzxdmrmzwelndrvoxlvqfoaehpdqvdmquiimnxjbsimwjelpiymgehqyplhxheeswovzmoduvravlnaydcjtwmekgzqcvarmxxvhxemswbwgwzaxamwsnuzmicvlzirbokwayebvkbbgdvkszvaitppnrpfargetgcltsvfjpanogzumbqmxicqucrljyiaozswgliceulwoepajkttzqxvhkmfuinzgaucxggdcaxmwbxykghtcmsohnqvfeewjtekgtbonhnwozwykfinbqkhbhxxmkkdrltxcisynanfxfmykwvtsfdihvmruxvzwtkghleqwsmlqmmqovubwtstdygqcyybhzaagwblobbuxcjdxviwcozsvejpesmyxahimpoxpqlksfhnfzurwanfgbmczxtqmawezfqpwytodsbftdogegwktafkpvjnqzzduhuybzncynivlcopzuuwugpksstgzqyolfohfjhwsghmogmqawxmxhewrvjvfxldxcfwwcyvcsyeujcivgemi',
//   ),
// );

// function checkInclusion1(s1: string, s2: string): boolean {
//   s1 = sort(s1);

//   for (let i = 0; i <= s2.length - s1.length; i++) {
//     const current = sort(s2.substring(i, s1.length + i));
//     if (s1 === current) return true;
//   }

//   return false;
// }

// function sort(s: string): string {
//   return s.split('').sort().join('');
// }
