import AvaliacaoEspecializada from "@/components/produto/AvaliacaoEspecializada";
import AvaliacoesUsuarios from "@/components/produto/AvaliacoesUsuarios";
import BannerCompra from "@/components/produto/BannerCompra";
import InformacoesProduto from "@/components/produto/InformacoesProduto";
import MedidorDePreco from "@/components/produto/MedidorDePreco";
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado";
import TituloProduto from "@/components/produto/TituloProduto";
import { produtos } from "@gstore/core";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PaginaProduto(props: any) {
  const id = Number(props.params.id);
  const produto = produtos.find((produto) => produto.id === id);

  return produto ? (
    <div className="flex flex-col gap-20 py-10 container">
      <div className="flex flex-col gap-10">
        <TituloProduto produto={produto} />
        <InformacoesProduto produto={produto} />
        <BannerCompra produto={produto} />
        <MedidorDePreco produto={produto} />
      </div>

      <AvaliacoesUsuarios produto={produto} />

      <AvaliacaoEspecializada produto={produto} />
    </div>
  ) : (
    <ProdutoNaoEncontrado />
  );
}
