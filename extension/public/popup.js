const favoriteTeamSelect = document.querySelector("#favorite-team");
const selectedTeamText = document.querySelector("#selected-team");

favoriteTeamSelect.addEventListener("change", (event) => {
  selectedTeamText.textContent = event.target.value;
});