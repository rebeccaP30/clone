const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({ apiKey: '39a4fe1103msha714626337f61f5p10264ajsn15bc4e0e7e22' });
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_token: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    });
    return res.data.choice[0].text;
}
