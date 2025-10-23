import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  try {
    const body = await req.json();
    const { order, filenames } = body;

    if (!Array.isArray(order)) {
      return new Response(
        JSON.stringify({ error: 'Order must be an array' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Save to Netlify Blobs with both IDs and filenames
    const store = getStore('gallery');
    await store.setJSON('order', { ids: order, filenames: filenames || [], timestamp: new Date().toISOString() });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Gallery order saved successfully!'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Error saving gallery order:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to save gallery order' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
};

export const config = {
  path: '/api/save-gallery-order',
};
