from pathlib import Path
p = Path('index.html')
text = p.read_text(encoding='utf-8')
replacements = {
    'rgba(201, 168, 76': 'rgba(244, 183, 196',
    'rgba(201,168,76': 'rgba(244,183,196',
    'rgba(201,168,76,0.9)': 'rgba(244,183,196,0.9)',
    'rgba(201,168,76,0.1)': 'rgba(244,183,196,0.1)',
    'rgba(201,168,76,0.15)': 'rgba(244,183,196,0.15)',
    'rgba(201,168,76,0.25)': 'rgba(244,183,196,0.25)',
    'rgba(201,168,76,0.4)': 'rgba(244,183,196,0.4)',
    'rgba(201,168,76,0.5)': 'rgba(244,183,196,0.5)',
    'rgba(201,168,76,0.08)': 'rgba(244,183,196,0.08)',
}
for old, new in replacements.items():
    text = text.replace(old, new)
p.write_text(text, encoding='utf-8')
