import Link from "next/link";

export const metadata = {
  title: "Compra Realizada - Vendas que funcionam.",
};

export default function SucessoPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
        <span className="text-4xl">✅</span>
      </div>
      <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Compra Realizada com Sucesso!
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Obrigado pela sua compra! Você receberá um e-mail com o link para
        download dos seus ebooks assim que o pagamento for confirmado.
      </p>
      <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
        Caso o pagamento seja via PIX, a confirmação é instantânea.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
      >
        Voltar à Loja
      </Link>
    </div>
  );
}
