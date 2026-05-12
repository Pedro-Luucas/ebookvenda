export default function PedidosPage() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black mb-2" style={{ letterSpacing: "-0.03em" }}>
          Meus Pedidos
        </h1>
        <p style={{ color: "var(--text-sec)" }}>
          Histórico de todas as suas compras.
        </p>
      </div>

      <div
        className="p-8 rounded-2xl border text-center"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
      >
        <div className="text-4xl mb-4">📋</div>
        <p className="font-semibold mb-2">Em breve</p>
        <p className="text-sm" style={{ color: "var(--text-sec)" }}>
          O histórico de pedidos estará disponível em breve.
        </p>
      </div>
    </>
  );
}
