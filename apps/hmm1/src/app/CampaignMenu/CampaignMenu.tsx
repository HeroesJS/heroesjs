import { Button } from '../Button';
import { Menu, MenuItem } from '../Menu';
import type { PositionProps } from '../PositionedComponent';
import { cancel, playLordAlamar, playLordIronfist, playLordSlayer, playQueenLamanda } from './assets';

interface CampaignMenuProps extends PositionProps {
  readonly onPlayLordIronfistClick?: () => void;
  readonly onPlayLordSlayerClick?: () => void;
  readonly onPlayQueenLamandaClick?: () => void;
  readonly onPlayLordAlamarClick?: () => void;
  readonly onCancelClick?: () => void;
}

export function CampaignMenu({
  onCancelClick,
  onPlayLordAlamarClick,
  onPlayLordIronfistClick,
  onPlayLordSlayerClick,
  onPlayQueenLamandaClick,
  x,
  y,
}: CampaignMenuProps) {
  return (
    <Menu label="Campaign Menu" x={x} y={y}>
      <MenuItem>
        <Button assets={playLordIronfist} label="Play Lord Ironfist" onClick={onPlayLordIronfistClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={playLordSlayer} label="Play Lord Slayer" onClick={onPlayLordSlayerClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={playQueenLamanda} label="Play Queen Lamanda" onClick={onPlayQueenLamandaClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={playLordAlamar} label="Play Lord Alamar" onClick={onPlayLordAlamarClick} />
      </MenuItem>
      <MenuItem>
        <Button assets={cancel} label="Cancel" onClick={onCancelClick} />
      </MenuItem>
    </Menu>
  );
}
