import cv2


img1 = cv2.imread("./images/carsoule-image1.jpg")
img2 = cv2.imread("./images/carsoule-image2.jpg")
img3 = cv2.imread("interstaller.jpg")

img1 = cv2.resize(img1, (612,401))
img2 = cv2.resize(img2, (612,401))
img3 = cv2.resize(img3, (250,230))

cv2.imwrite("./images/carsoule-image1.jpg",img1)
cv2.imwrite("./images/carsoule-image2.jpg",img2)
cv2.imwrite("interstaller.jpg",img3)
