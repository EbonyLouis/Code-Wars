Instructions: Surface Area and Volume of a Box


function getSize(width, height, depth){
let area = 2*depth*width + 2*depth*height + 2*width*height
let volume =  depth*height*width
return [area,volume]
}
