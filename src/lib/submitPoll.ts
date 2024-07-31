'use server';
type Data = {
  answerName: string;
  ipAddress: string;
  city: string;
  country: string;
};

interface LocationResponse {
  city: string;
  country_name: string;
  // Add other properties as needed
}

export async function submitPollData(answerName: string) {
  const accessToken = process.env.IPSTACK_IO_TOKEN;
  // Fetch the IP address
  const ipRes = await fetch('https://api.ipify.org?format=json');
  const ipData = await ipRes.json();
  const ipAddress = ipData.ip;

  let city = 'N/A';
  let country = 'N/A';

  if (ipAddress.length > 0) {
    const locationRes = await fetch(
      `http://api.ipstack.com/${ipAddress}?access_key=${accessToken}`
    );
    const locationData = (await locationRes.json()) as LocationResponse;

    city = locationData.city || 'N/A';
    country = locationData.country_name || 'N/A';
  }

  // Prepare the data to be sent to WordPress
  const pollData: Data = {
    answerName,
    ipAddress,
    city,
    country,
  };

  // Your WordPress REST API endpoint
  const apiUrl = 'https://test.experimentalapp.xyz/wp-json/wp/v2/submit-poll';

  console.log('check2', pollData);

  // Send the data to WordPress using fetch
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: `Bearer YOUR_WORDPRESS_API_TOKEN`,
    },
    body: JSON.stringify(pollData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit poll answer');
  }

  const responseData = await response.json();

  // Return a plain object
  return responseData;
}
