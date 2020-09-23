# js-gallery

"js-gallery" is a javascript library to help you arrange your photos nicely.

# DEMO

You'll understand how Js-gallery arranges your photos. The array of photos is based on Facebook. you can generate as many galleries as you like on one page.

## ONE
When you only upload one photo

![one photo](./sample-image/1.png)

## TWO
### square pattern
When they're both square

![two square](./sample-image/2-z.png)

### landscape pattern
When both photos are in landscape mode

![two landscape](./sample-image/2-x.png)

### portrait pattern
When even one photo is portrait mode

![two portrait](./sample-image/2-y.png)

## THREE
### landscape pattern
When the first picture is landscape mode

![three landscape](./sample-image/3-x.png)

### portrait pattern
When the first picture is portrait mode

![three portrait](./sample-image/3-y.png)

## FOUR
### square pattern
When they're all square

![four square](./sample-image/4-z.png)

### landscape pattern
When the first picture is landscape mode

![four landscape](./sample-image/4-x.png)

### portrait pattern
When the first picture is portrait mode

![four portrait](./sample-image/4-y.png)

## FIVE
When there are five photos, there is one pattern.

![five](./sample-image/5.png)

## SIX or MORE
If you have 6 or more photos, the number of photos remaining will be expressed as a number. The example below shows how to upload 7 photos.

![six or more](./sample-image/6.png)

## OPTION
Click on any of the photos to see a list of photos. The list will also show the excess photos that are not shown. This function is based on [appple/SmartPhoto](https://github.com/appleple/SmartPhoto).
![index](./sample-image/index.png)

You can change the width and color of the border as you wish. By default, the numbers are set to the same color as the border.

![border](./sample-image/border.png)
![color](./sample-image/color.png)


# Usage
## 1. Please set up the following to be loaded from the html file.
   -  This library's css
   -  This library's javascript
   -  [appple/SmartPhoto](https://github.com/appleple/SmartPhoto)

## 2. It forms an html structure as follows
```HTML
<body>

  <div class="js-gallery">
    <div>
      <a href="./image/1.jpg" class="js-smartPhoto" data-group="gellery">
        <img src="./image/1.jpg" width="600"  height="600" alt="">
      </a>
    <div>
      <a href="./image/2.jpg" class="js-smartPhoto" data-group="gellery">
        <img src="./image/2.jpg" width="300"  height="400" alt="">
      </a>
    </div>

    .
    .
    .

    <div>
      <a href="./image/7.jpg" class="js-smartPhoto" data-group="gellery">
        <img src="./image/7.jpg" width="300"  height="300" alt="">
      </a>
    </div>
  </div>

  <script src="https://unpkg.com/smartphoto@latest/js/smartphoto.min.js"></script>
  <script type="text/javascript" src="./js/gallery.js"></script>

</body>
```
  -  Add a js-gallery class to the outermost div.
  -  Add a class called js-smartPhoto to the div that covers each item. This is a setup for using [appple/SmartPhoto](https://github.com/appleple/SmartPhoto). See [appple/SmartPhoto](https://github.com/appleple/SmartPhoto) for other details.

## 3. Various settings
### How to change the size of the gallery
Change the statement defining size in gallery.js
```javascript
let size = photoArea.clientWidth = 700;
```

### How to change the width of the border
Change the border value in gallery.js and gallery.css
```javascript
const border = 5;
```
```css
:root {
  --border:5px;
}
```
### How to change the color of the border
Change the border_color value in gallery.css
```css
:root {
  --border_color:white;
}
```
# Author
Yu Nobuoka
