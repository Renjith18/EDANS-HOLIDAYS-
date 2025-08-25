function toggleCard(id, iconId) {
  const content = document.getElementById(id);
  const icon = document.getElementById(iconId);

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0px";
    icon.classList.remove("active");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.classList.add("active");
  }
}