let fileHandle;

const textarea = document.getElementById('textarea');

document.getElementById('open-file-picker').addEventListener('click', async () => {
    [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();

    textarea.value = contents;

});


document.getElementById('save-file').addEventListener('click', async () => {

    const writable = await fileHandle.createWritable();

    await writable.write(textarea.value);

    await writable.close();

});
