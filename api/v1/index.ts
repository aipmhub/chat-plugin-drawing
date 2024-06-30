import { PluginErrorType, createErrorResponse } from '@aipmorg/chat-plugin-sdk';

import { RequestData } from '../../src/type';

export const config = {
  runtime: 'edge',
};

const BASE_URL = 'https://image.pollinations.ai/prompt';

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const { description, params } = (await req.json()) as RequestData;

  const result = `![result](${BASE_URL}/${description
    .replaceAll(/\s/g, '%20')
    .replaceAll(/[,.]/g, '')}?${params})`;

  return new Response(result);
};
