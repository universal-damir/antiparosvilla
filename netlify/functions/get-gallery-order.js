import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  const store = getStore('gallery');

  try {
    const savedData = await store.get('order', { type: 'json' });

    if (savedData && savedData.ids) {
      // Return just the IDs for compatibility with existing code
      return new Response(
        JSON.stringify({ order: savedData.ids, filenames: savedData.filenames, timestamp: savedData.timestamp }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({ order: null }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error getting gallery order:', error);
    return new Response(
      JSON.stringify({ order: null }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};

export const config = {
  path: '/api/get-gallery-order',
};
