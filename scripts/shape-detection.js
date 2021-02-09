
const detectFaces = async (img) => {

  try {
    const faces = await new FaceDetector().detect(img);

    console.log(faces);

    faces.forEach(face => {
      const div = document.createElement('div');
      const box = face.boundingBox;
      const computedStyle = getComputedStyle(img);
      const [top, right, bottom, left] = [
        computedStyle.marginTop,
        computedStyle.marginRight,
        computedStyle.marginBottom,
        computedStyle.marginLeft
      ].map(m => parseInt(m, 10));
      const scaleX = img.width / img.naturalWidth;
      const scaleY = img.height / img.naturalHeight;
      div.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
      div.style.position = 'absolute';
      div.style.top = `${scaleY * box.top + top}px`;
      div.style.left = `${scaleX * box.left + left}px`;
      div.style.width = `${scaleX * box.width}px`;
      div.style.height = `${scaleY * box.height}px`;
      img.before(div);
    });
  } catch(e) {
    console.error(e);
  }

}


detectFaces( document.getElementsByTagName('img')[0] )
