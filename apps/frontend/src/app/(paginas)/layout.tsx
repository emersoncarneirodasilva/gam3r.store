import Pagina from "@/components/template/Pagina";
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";
import { ProvedorPagamento } from "@/data/contexts/ContextoPagamento";
import { ProvedorProdutos } from "@/data/contexts/ContextoProdutos";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ProvedorProdutos>
      <ProvedorCarrinho>
        <ProvedorPagamento>
          <Pagina>{children}</Pagina>;
        </ProvedorPagamento>
      </ProvedorCarrinho>
    </ProvedorProdutos>
  );
}
