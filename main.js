// Define the gallery items in an array (Object format)
const galleryItems = [
	{ category: "flower", full: "flowers-pink-large.jpg", thumb: "flowers-pink-large.jpg", caption: "pink- smells good" },
	{ category: "flower", full: "flowers-purple-small.jpg", thumb: "flowers-purple-small.jpg", caption: "purple- looks good" },
	{ category: "flower", full: "flowers-red-large.jpg", thumb: "flowers-red-large.jpg", caption: "red- beautifull" },
	{ category: "flower", full: "flowers-white-large.jpg", thumb: "flowers-white-large.jpg", caption: "white- peacefull" },
	{ category: "flower", full: "flowers-yellow-small.jpg", thumb: "flowers-yellow-small.jpg", caption: "yellow- smells good" },
	{ category: "flower", full: "flowers-pink-large.jpg", thumb: "flowers-pink-large.jpg", caption: "pink " }
  ];
  
  // Function to display the thumbnail images dynamically
  function displayThumbnails() {
	const thumbnailList = document.getElementById("thumbnail-list");
  
	// Iterate through the galleryItems array and create <li> and <img> for each item
	galleryItems.forEach(item => {
	  const listItem = document.createElement("li");
	  const img = document.createElement("img");
	  img.src = item.thumb;
	  img.alt = item.category;
	  img.classList.add("thumbnail");
	  listItem.appendChild(img);
	  thumbnailList.appendChild(listItem);
  
	  // Add event listener to update the featured image and caption when a thumbnail is clicked
	  img.addEventListener("click", function() {
		const featuredImg = document.getElementById("featured-img");
		const caption = document.getElementById("image-caption");
		featuredImg.src = item.full;
		caption.textContent = item.caption;
		
		// Update the active state for thumbnails
		document.querySelectorAll(".thumbnail").forEach(thumbnail => thumbnail.classList.remove("active"));
		img.classList.add("active");
	  });
	});
  }
  
  // Call the function to populate the thumbnails
  displayThumbnails();