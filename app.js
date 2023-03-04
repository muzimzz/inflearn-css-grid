const ul = document.querySelector("#flex_ul");
const kakaotalk_li = document.getElementById("kakaotalk");
const instagram_li = document.getElementById("instagram");
const twitter_li = document.getElementById("twitter");
const facebook_li = document.getElementById("facebook");
const tictok_li = document.getElementById("tictok");


// flex-direction
const flexDirection = document.querySelector("#flex-direction");
const bt_row = flexDirection.querySelector("#row");
const bt_row_rev = flexDirection.querySelector("#row-reverse");
const bt_col = flexDirection.querySelector("#column");
const bt_col_rev = flexDirection.querySelector("#column-reverse");
// event
bt_row.addEventListener("click", () => {ul.style.flexDirection = "row"; ul.style.height = "150px";});
bt_row_rev.addEventListener("click", () => {ul.style.flexDirection = "row-reverse"; ul.style.height = "150px";});
bt_col.addEventListener("click", () => {ul.style.flexDirection = "column"; ul.style.height = "300px";});
bt_col_rev.addEventListener("click", () => {ul.style.flexDirection = "column-reverse"; ul.style.height = "300px";});

// flex-wrap
const flexWrap = document.querySelector("#flex-wrap");
const bt_nowrap = flexWrap.querySelector("#nowrap");
const bt_wrap = flexWrap.querySelector("#wrap");
//event
bt_nowrap.addEventListener("click", () => {ul.style.flexWrap = "nowrap"});
bt_wrap.addEventListener("click", () => {ul.style.flexWrap = "wrap"});

// justify-content
const justifyContent = document.querySelector("#justify-content");
const bt_flexStart = justifyContent.querySelector("#flex-start");
const bt_flexEnd = justifyContent.querySelector("#flex-end");
const bt_center = justifyContent.querySelector("#center");
const bt_spaceBetween = justifyContent.querySelector("#space-between");
const bt_spaceAround = justifyContent.querySelector("#space-around");
const bt_spaceEvenly = justifyContent.querySelector("#space-evenly");
// event
bt_flexStart.addEventListener("click", () => {ul.style.justifyContent = "flex-start";});
bt_flexEnd.addEventListener("click", () => {ul.style.justifyContent = "flex-end";});
bt_center.addEventListener("click", () => {ul.style.justifyContent = "center";});
bt_spaceBetween.addEventListener("click", () => {ul.style.justifyContent = "space-between";});
bt_spaceAround.addEventListener("click", () => {ul.style.justifyContent = "space-around";});
bt_spaceEvenly.addEventListener("click", () => {ul.style.justifyContent = "space-evenly";});

// align-items
const alignItems = document.querySelector("#align-items");
const bt_alignItems_stretch = alignItems.querySelector("#stretch");
const bt_alignItems_flexStart = alignItems.querySelector("#align_flex-start");
const bt_alignItems_flexEnd = alignItems.querySelector("#align_flex-end");
const bt_alignItems_center = alignItems.querySelector("#align_center");
// event
bt_alignItems_stretch.addEventListener("click", () => {ul.style.alignItems = "stretch"});
bt_alignItems_flexStart.addEventListener("click", () => {ul.style.alignItems = "flex-start";});
bt_alignItems_flexEnd.addEventListener("click", () => {ul.style.alignItems = "flex-end";});
bt_alignItems_center.addEventListener("click", () => {ul.style.alignItems = "center";});

// align-self
const alignSelf = document.querySelector("#align-self");
const bt_alignSelf_stretch = alignSelf.querySelector("#stretch");
const bt_alignSelf_flexStart = alignSelf.querySelector("#align_flex-start");
const bt_alignSelf_flexEnd = alignSelf.querySelector("#align_flex-end");
const bt_alignSelf_center = alignSelf.querySelector("#align_center");
const alignSelf_select = alignSelf.querySelector("#align-self_select");
// event function
function paintAlignSelf(align) {
  const selectedSNS = alignSelf_select.value;
  const selectedSNS_li = document.getElementById(selectedSNS);
  selectedSNS_li.style.alignSelf = `${align}`;
}
// event
bt_alignSelf_stretch.addEventListener("click", () => {paintAlignSelf("stretch")});
bt_alignSelf_flexStart.addEventListener("click", () => {paintAlignSelf("flex-start")});
bt_alignSelf_flexEnd.addEventListener("click", () => {paintAlignSelf("flex-end")});
bt_alignSelf_center.addEventListener("click", () => {paintAlignSelf("center")});

// flex-grow
const flexGrow = document.querySelector("#flex-grow");
const flexGrow_select = flexGrow.querySelector("#flex-grow_select");
const input_flexGrow_kakaotalk = flexGrow.querySelector("#flex-grow_kakaotalk");
const input_flexGrow_instagram = flexGrow.querySelector("#flex-grow_instagram");
const input_flexGrow_twitter = flexGrow.querySelector("#flex-grow_twitter");
const input_flexGrow_facebook = flexGrow.querySelector("#flex-grow_facebook");
const input_flexGrow_tictok = flexGrow.querySelector("#flex-grow_tictok");
const bt_flexGrow_apply = flexGrow.querySelector("#flex-grow_apply");
// event function
function paintFlexGrow() {
  kakaotalk_li.style.flexGrow = input_flexGrow_kakaotalk.value;
  instagram_li.style.flexGrow = input_flexGrow_instagram.value;
  twitter_li.style.flexGrow = input_flexGrow_twitter.value;
  facebook_li.style.flexGrow = input_flexGrow_facebook.value;
  tictok_li.style.flexGrow = input_flexGrow_tictok.value;
}
// event
bt_flexGrow_apply.addEventListener("click", () => {paintFlexGrow();});

// flex-shrink
const flexShrink = document.querySelector("#flex-shrink");
const flexShrink_select = flexShrink.querySelector("#flex-shrink_select");
const input_flexShrink_kakaotalk = flexShrink.querySelector("#flex-shrink_kakaotalk");
const input_flexShrink_instagram = flexShrink.querySelector("#flex-shrink_instagram");
const input_flexShrink_twitter = flexShrink.querySelector("#flex-shrink_twitter");
const input_flexShrink_facebook = flexShrink.querySelector("#flex-shrink_facebook");
const input_flexShrink_tictok = flexShrink.querySelector("#flex-shrink_tictok");
const bt_flexShrink_apply = flexShrink.querySelector("#flex-shrink_apply");
// event function
function paintflexShrink() {
  kakaotalk_li.style.flexShrink = input_flexShrink_kakaotalk.value;
  instagram_li.style.flexShrink = input_flexShrink_instagram.value;
  twitter_li.style.flexShrink = input_flexShrink_twitter.value;
  facebook_li.style.flexShrink = input_flexShrink_facebook.value;
  tictok_li.style.flexShrink = input_flexShrink_tictok.value;
}
// event
bt_flexShrink_apply.addEventListener("click", () => {paintflexShrink();});
