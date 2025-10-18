// src/components/pokemonTypeLabel.tsx
// ポケモンのタイプのラベル
import { pokemonTypesMap } from '../pokemonTypesMap';

type PokemonTypeLabelProps = {
  type: string;
};

const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
  interface PokemonTypeInfo {
    jaType: string;
    color: string;
    // 他に必要なプロパティがあればここに追加
    [key: string]: any;
  }

  const typeInfo: PokemonTypeInfo | undefined = pokemonTypesMap.find(
    (t: PokemonTypeInfo) => t.jaType === type
  );
  return (
    <span 
      style={{
        backgroundColor: typeInfo?.color,
      }}
      key={type}
      className={`text-white px-3 py-1 rounded-full w-fit`}
    >
      {typeInfo?.jaType}
    </span>
  );
};

export default PokemonTypeLabel;
