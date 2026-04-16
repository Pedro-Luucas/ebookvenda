interface AbacatePayProduct {
  externalId: string;
  name: string;
  description: string;
  quantity: number;
  price: number; // em centavos
}

interface AbacatePayBillingRequest {
  frequency: "ONE_TIME";
  methods: ["PIX"];
  products: AbacatePayProduct[];
  returnUrl: string;
  completionUrl: string;
  customer: {
    name: string;
    email: string;
    cellphone: string;
    taxId: string;
  };
}

interface AbacatePayBillingResponse {
  data: {
    id: string;
    url: string;
    amount: number;
    status: string;
  };
  error: null | string;
}

const ABACATEPAY_API_URL = "https://api.abacatepay.com/v1";

function getApiKey(): string {
  const key = process.env.ABACATEPAY_API_KEY;
  if (!key) {
    throw new Error("ABACATEPAY_API_KEY não configurada nas variáveis de ambiente");
  }
  return key;
}

export async function createBilling(
  products: AbacatePayProduct[],
  customer: AbacatePayBillingRequest["customer"],
  returnUrl: string,
  completionUrl: string
): Promise<AbacatePayBillingResponse> {
  const response = await fetch(`${ABACATEPAY_API_URL}/billing/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getApiKey()}`,
    },
    body: JSON.stringify({
      frequency: "ONE_TIME",
      methods: ["PIX"],
      products,
      returnUrl,
      completionUrl,
      customer,
    } satisfies AbacatePayBillingRequest),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Erro ao criar cobrança no AbacatePay: ${errorText}`);
  }

  return response.json();
}
