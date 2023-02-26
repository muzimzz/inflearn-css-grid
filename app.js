const ul = document.querySelector("#flex_ul");


// flex-direction
const flexDirection = document.querySelector("#flex-direction");
const bt_row = flexDirection.querySelector("#row");
const bt_row_rev = flexDirection.querySelector("#row-reverse");
const bt_col = flexDirection.querySelector("#column");
const bt_col_rev = flexDirection.querySelector("#column-reverse");
// event
bt_row.addEventListener("click", () => { ul.style.flexDirection = "row"; ul.style.height = "100px";});
bt_row_rev.addEventListener("click", () => { ul.style.flexDirection = "row-reverse"; ul.style.height = "100px";});
bt_col.addEventListener("click", () => { ul.style.flexDirection = "column"; ul.style.height = "300px";});
bt_col_rev.addEventListener("click", () => { ul.style.flexDirection = "column-reverse"; ul.style.height = "300px";});

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
const alignSelf_select = alignSelf.querySelector("#sns_select");
// event function
function returnSNS(align) {
  const selectedSNS = alignSelf_select.value;
  const selectedSNS_li = document.getElementById(selectedSNS);
  selectedSNS_li.style.alignSelf = `${align}`;
}
// event
bt_alignSelf_stretch.addEventListener("click", () => {returnSNS("stretch")});
bt_alignSelf_flexStart.addEventListener("click", () => {returnSNS("flex-start")});
bt_alignSelf_flexEnd.addEventListener("click", () => {returnSNS("flex-end")});
bt_alignSelf_center.addEventListener("click", () => {returnSNS("center")});
