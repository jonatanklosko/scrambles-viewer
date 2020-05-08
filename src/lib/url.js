const IMAGE_BASE_URL = 'http://cube.crider.co.uk/visualcube.php';

export function cubeImageUrl(eventId, alg) {
  const pzl = {
    '222': 2,
    '333': 3,
    '333oh': 3,
    '333bf': 3,
    '444': 4,
    '555': 5,
    '666': 6,
    '777': 7,
  }[eventId];

  if (!pzl) return null;

  const params = new URLSearchParams({
    fmt: 'svg',
    bg: 't',
    pzl,
    alg,
    sch: 'wrgyob',
    r: 'y34x-34'
  });

  return `${IMAGE_BASE_URL}?${params.toString()}`;
}
