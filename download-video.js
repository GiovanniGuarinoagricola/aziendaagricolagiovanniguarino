import https from 'https';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Video from Pexels (free to use)
const videoUrl = 'https://joy1.videvo.net/videvo_files/video/free/2014-06/large_watermarked/Blue_Sky_and_Clouds_Timelapse_0892__Videvo_preview.mp4';
const outputPath = join(__dirname, 'public', 'media', 'hero-bg.mp4');

// Ensure the directory exists
const mediaDir = join(__dirname, 'public', 'media');
if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

console.log('Downloading video...');
https.get(videoUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error('Failed to download video:', response.statusCode, response.statusMessage);
    return;
  }

  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  let downloadedBytes = 0;
  response.on('data', (chunk) => {
    downloadedBytes += chunk.length;
    console.log(`Downloaded: ${(downloadedBytes / 1024 / 1024).toFixed(2)} MB`);
  });

  fileStream.on('finish', () => {
    console.log('Video downloaded successfully!');
    fileStream.close();
  });
}).on('error', (err) => {
  console.error('Error downloading video:', err.message);
}); 