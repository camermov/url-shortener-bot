import axios from 'axios';

const validateUrl = (url) => {
    const regex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
};

export const getShortUrl = async (url) => {
    if (!validateUrl(url)) return;

    try {
        const resTinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${url}`);
        const resCleanUrI = await axios.post(`https://cleanuri.com/api/v1/shorten`, { url });
        const resBitly = await axios.post('https://api-ssl.bitly.com/v4/shorten', { long_url: url }, {
            headers: { Authorization: "Bearer 7b16205bd776f0b9ff7697fa71e506b62605e3d2" }
        });
        return { bitly: resBitly.data.link, tinyUrl: resTinyUrl.data, cleanUrl: resCleanUrI.data.result_url };
    } catch (error) {
        console.log(error.message);
        return;
    };
};
