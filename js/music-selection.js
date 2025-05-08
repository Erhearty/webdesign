document.addEventListener("DOMContentLoaded", () => {
    const mediaList = document.getElementById("media-list");
    const playButton = document.getElementById("play-button");

    const mediaItems = [
        { id: 1, name: "Bohemian Rhapsody", duration: "3:45" },
        { id: 2, name: "Stairway to Heaven", duration: "4:20" },
        { id: 3, name: "Hotel California", duration: "2:50" },
        { id: 4, name: "Imagine", duration: "5:10" },
        { id: 5, name: "Smells Like Teen Spirit", duration: "3:30" },
        { id: 6, name: "Sweet Child O' Mine", duration: "4:00" },
        { id: 7, name: "Hey Jude", duration: "3:15" },
        { id: 8, name: "Wonderwall", duration: "4:45" },
        { id: 9, name: "Billie Jean", duration: "3:50" },
        { id: 10, name: "Like a Rolling Stone", duration: "5:00" },
        { id: 11, name: "Purple Rain", duration: "2:40" },
        { id: 12, name: "Let It Be", duration: "3:55" },
        { id: 13, name: "Yesterday", duration: "4:10" },
        { id: 14, name: "Born to Run", duration: "3:25" },
        { id: 15, name: "Comfortably Numb", duration: "4:30" },
        { id: 16, name: "November Rain", duration: "3:35" },
        { id: 17, name: "Hallelujah", duration: "4:50" },
        { id: 18, name: "Losing My Religion", duration: "3:20" },
        { id: 19, name: "Creep", duration: "5:15" },
        { id: 20, name: "With or Without You", duration: "4:05" },
        { id: 21, name: "Nothing Else Matters", duration: "3:40" },
        { id: 22, name: "Blackbird", duration: "4:25" },
        { id: 23, name: "No Woman, No Cry", duration: "3:10" },
        { id: 24, name: "Knocking on Heaven's Door", duration: "5:05" },
        { id: 25, name: "Shape of You", duration: "3:50" },
        { id: 26, name: "Rolling in the Deep", duration: "4:15" },
        { id: 27, name: "Someone Like You", duration: "4:45" },
        { id: 28, name: "Thinking Out Loud", duration: "4:10" },
        { id: 29, name: "Perfect", duration: "4:20" },
        { id: 30, name: "Shallow", duration: "3:35" },
        { id: 31, name: "Blinding Lights", duration: "3:20" },
        { id: 32, name: "Old Town Road", duration: "2:55" },
        { id: 33, name: "Uptown Funk", duration: "4:30" },
        { id: 34, name: "Happy", duration: "3:40" },
        { id: 35, name: "All of Me", duration: "4:05" },
        { id: 36, name: "Stay With Me", duration: "3:15" },
        { id: 37, name: "Take Me to Church", duration: "4:10" },
        { id: 38, name: "Radioactive", duration: "3:55" },
        { id: 39, name: "Counting Stars", duration: "4:25" },
        { id: 40, name: "Demons", duration: "3:45" },
        { id: 41, name: "Royals", duration: "3:10" },
        { id: 42, name: "Let Her Go", duration: "4:00" },
        { id: 43, name: "Wake Me Up", duration: "4:15" },
        { id: 44, name: "Chandelier", duration: "3:50" },
        { id: 45, name: "Cheap Thrills", duration: "3:30" },
        { id: 46, name: "Believer", duration: "3:25" },
        { id: 47, name: "Thunder", duration: "3:20" },
        { id: 48, name: "Havana", duration: "3:40" },
        { id: 49, name: "Despacito", duration: "4:00" },
        { id: 50, name: "Señorita", duration: "3:25" },
        { id: 51, name: "Bad Guy", duration: "3:15" },
        { id: 52, name: "Lovely", duration: "3:20" },
        { id: 53, name: "Ocean Eyes", duration: "3:50" },
        { id: 54, name: "When the Party's Over", duration: "3:10" },
        { id: 55, name: "Everything I Wanted", duration: "4:05" },
        { id: 56, name: "No Time to Die", duration: "4:15" },
        { id: 57, name: "Drivers License", duration: "4:00" },
        { id: 58, name: "Good 4 U", duration: "3:25" },
        { id: 59, name: "Deja Vu", duration: "3:35" },
        { id: 60, name: "Levitating", duration: "3:45" },
        { id: 61, name: "Don't Start Now", duration: "3:30" },
        { id: 62, name: "Break My Heart", duration: "3:50" },
        { id: 63, name: "Physical", duration: "3:25" },
        { id: 64, name: "New Rules", duration: "3:40" },
        { id: 65, name: "IDGAF", duration: "3:15" },
        { id: 66, name: "One Kiss", duration: "3:55" },
        { id: 67, name: "Electricity", duration: "4:05" },
        { id: 68, name: "Scared to Be Lonely", duration: "3:45" },
        { id: 69, name: "Titanium", duration: "4:10" },
        { id: 70, name: "Bang Bang", duration: "3:50" },
        { id: 71, name: "Side to Side", duration: "3:35" },
        { id: 72, name: "Into You", duration: "4:00" },
        { id: 73, name: "No Tears Left to Cry", duration: "3:55" },
        { id: 74, name: "7 Rings", duration: "3:25" },
    ];
        const selectedItems = new Set();
    
        function renderMediaItems() {
            mediaList.innerHTML = "";
            mediaItems.forEach((item) => {
                const listItem = document.createElement("li");
                listItem.className = "media-item";
                listItem.dataset.id = item.id;
                listItem.innerHTML = `
                    <div class="icon" data-id="${item.id}"></div>
                    <div class="name">${item.name}</div>
                    <div class="duration">${item.duration}</div>
                `;
    
                // Add click event for the entire list item
                listItem.addEventListener("click", () => {
                    if (selectedItems.has(item.id)) {
                        selectedItems.delete(item.id);
                        listItem.classList.remove("selected");
                    } else {
                        selectedItems.add(item.id);
                        listItem.classList.add("selected");
                    }
    
                    playButton.classList.toggle("hidden", selectedItems.size === 0);
                });
    
                // Add click event for the icon to play only this item
                const icon = listItem.querySelector(".icon");
                icon.addEventListener("click", (event) => {
                    event.stopPropagation(); // Prevent triggering the list item click
                    const selectedMedia = mediaItems.find(
                        (media) => media.id === parseInt(icon.dataset.id)
                    );
                    localStorage.setItem("selectedMedia", JSON.stringify([selectedMedia]));
                    window.location.href = "playback.html";
                });
    
                mediaList.appendChild(listItem);
            });
        }
    
        playButton.addEventListener("click", () => {
            const selectedMedia = mediaItems.filter((item) =>
                selectedItems.has(item.id)
            );
            localStorage.setItem("selectedMedia", JSON.stringify(selectedMedia));
            window.location.href = "playback.html";
        });
    
        renderMediaItems();
    });