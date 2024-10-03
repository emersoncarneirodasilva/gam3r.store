import { useCallback } from "react";

export default function useLocalStorage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const salvarItem = useCallback((chave: string, valor: any) => {
    localStorage.setItem(chave, JSON.stringify(valor));
  }, []);

  const obterItem = useCallback((chave: string) => {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : null;
  }, []);

  const removerItem = useCallback((chave: string) => {
    localStorage.removeItem(chave);
  }, []);

  return { salvarItem, obterItem, removerItem };
}
