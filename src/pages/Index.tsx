import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Track {
  title: string;
  url: string;
}

interface Playlist {
  id: string;
  title: string;
  description: string;
  effect: string;
  icon: string;
  color: string;
  tracks: Track[];
}

const playlists: Playlist[] = [
  {
    id: 'baroque',
    title: 'Барокко',
    description: 'Для освежения восприятия жизни',
    effect: 'Музыка эпохи барокко помогает активизировать умственную деятельность, улучшает концентрацию и освежает восприятие окружающего мира',
    icon: 'Sparkles',
    color: 'from-purple-400 to-pink-300',
    tracks: [
      { title: 'Сборник Барокко', url: 'https://youtu.be/BjnnUCmNREI' },
      { title: 'Вивальди концерт для 4 скрипок', url: 'https://www.youtube.com/watch?v=QSs6HKwhbAA' },
      { title: 'Сборник концертов Вивальди', url: 'https://youtu.be/ZgE_x1-kkqY' },
      { title: 'Сборник концертов Альбинони', url: 'https://youtu.be/WMLSwqOzHo' }
    ]
  },
  {
    id: 'comfort',
    title: 'Утешение',
    description: 'При печали',
    effect: 'Глубокие и проникновенные произведения Баха и Моцарта обладают терапевтическим эффектом, помогая справиться с грустью и меланхолией',
    icon: 'Heart',
    color: 'from-blue-300 to-purple-300',
    tracks: [
      { title: 'Бах Ария Петра', url: 'https://youtu.be/BBeXF_lnj_M' },
      { title: 'Бах Прелюдия ми минор', url: 'https://youtu.be/29fVwlexwco' },
      { title: 'Бах Адажио из Брандербургского концерта', url: 'https://youtu.be/_l5vrIlPv-c' },
      { title: 'Бах сюита для виолончели до мажор', url: 'https://youtu.be/mGQLXRTl3Z0' },
      { title: 'Моцарт Адажио из концерта для арфы и флейты', url: 'https://youtu.be/4hIRXX_7gME' }
    ]
  },
  {
    id: 'calm',
    title: 'Спокойствие',
    description: 'Средневековая музыка для успокоения нервов',
    effect: 'Старинные мелодии эпохи Средневековья и Возрождения обладают удивительным свойством успокаивать нервную систему и приводить мысли в порядок',
    icon: 'CloudMoon',
    color: 'from-teal-300 to-blue-300',
    tracks: [
      { title: 'Лютневая музыка эпохи Возрождения, сборник 1', url: 'https://youtu.be/o2nr401xYTM' },
      { title: 'Лютневая музыка эпохи Возрождения, сборник 2', url: 'https://youtu.be/Y6VZ2mk5K5M' },
      { title: 'Лютневая музыка эпохи Возрождения, сборник 3', url: 'https://youtu.be/_Q8tfudsylQ' },
      { title: 'Франческо Ландини (итальянское Возрождение)', url: 'https://youtu.be/u2scNKvtrK8' },
      { title: 'Перотин Великий (Французские средние века)', url: 'https://youtu.be/yja6VDRwXh0' },
      { title: 'Палестрина сборник (Итальянское возрождение)', url: 'https://youtu.be/VBEwP95zNGk' }
    ]
  },
  {
    id: 'energy',
    title: 'Бодрость',
    description: 'Для энергии и активности',
    effect: 'Жизнерадостные произведения классиков поднимают настроение, наполняют энергией и помогают начать день с правильным настроем',
    icon: 'Zap',
    color: 'from-yellow-300 to-orange-300',
    tracks: [
      { title: 'Гайдн Симфония "Утро"', url: 'https://youtu.be/qTQvFFbVqDo' },
      { title: 'Моцарт Девятый концерт', url: 'https://youtu.be/eopPws1rG2A' },
      { title: 'Гендель Чакона соль мажор', url: 'https://youtu.be/_Zj45qXAl3Q' }
    ]
  },
  {
    id: 'passion',
    title: 'Страсть',
    description: 'Оперные произведения',
    effect: 'Драматические оперы пробуждают глубокие эмоции, помогают прожить чувства и наполняют жизнь яркими красками',
    icon: 'Flame',
    color: 'from-red-400 to-pink-400',
    tracks: [
      { title: 'Бах Чакона', url: 'https://youtu.be/7y4lcQ7BTLw' },
      { title: 'Пуччини "Тоска"', url: 'https://youtu.be/jw_uDzhNeTg' },
      { title: 'Бизе "Кармен"', url: 'https://youtu.be/KJ_HHRJf0xg' },
      { title: 'Леонковалло "Паяцы"', url: 'https://youtu.be/bbTWJTK2oCs' },
      { title: 'Монтеверди "Коронация Поппеи"', url: 'https://youtu.be/5Rj2GnhGr9A' }
    ]
  },
  {
    id: 'beauty',
    title: 'Красота',
    description: 'Для эстетического наслаждения',
    effect: 'Изысканные произведения для чистого эстетического удовольствия, помогающие ценить красоту мира и гармонию звуков',
    icon: 'Music',
    color: 'from-indigo-300 to-purple-400',
    tracks: [
      { title: 'Рахманинов 2 концерт 2 часть', url: 'https://youtu.be/rEGOihjqO9w' },
      { title: 'Рахманинов Прелюдия соль мажор', url: 'https://youtu.be/znlUBaLH2zY' },
      { title: 'Дворжак Славянские танцы', url: 'https://youtu.be/e4kTHnGfhvE' },
      { title: 'Штраус Вальсы', url: 'https://youtu.be/aCuB6KxXb58' },
      { title: 'Дебюсси-релакс', url: 'https://youtu.be/VfzQB4KkhF4' }
    ]
  }
];

const Index = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string>('baroque');
  const currentPlaylist = playlists.find(p => p.id === selectedPlaylist) || playlists[0];

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0] || url.split('watch?v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-4">
            <Icon name="Music" size={56} className="text-primary animate-float" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Музыкальная аптечка
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Музыку, как таблетку, можно "принимать" от головной боли, неврозов или бессонницы
          </p>
          <Badge variant="secondary" className="text-base px-4 py-2">
            Научно обоснованная музыкотерапия
          </Badge>
        </header>

        <Card className="mb-8 animate-scale-in border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Lightbulb" size={24} className="text-primary" />
              О музыкотерапии
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base leading-relaxed space-y-4">
            <p>
              Воздействие музыки на психику человека обусловлено совпадением, или несовпадением её ритма, 
              с внутренними ритмами человека, энергетическим полем. Это лишний раз подтверждает, 
              насколько энергетика связана со здоровьем.
            </p>
            <p>
              Лечебные свойства музыки замечены давно. Но только в прошлом веке было научно доказано, 
              что музыкальные звуки с помощью электромагнитных волн заставляют вибрировать каждую клетку 
              нашего организма и изменять кровяное давление, частоту сердечных сокращений, ритм и глубину 
              дыхания.
            </p>
            <p className="font-semibold text-primary">
              Надеюсь плейлист "Музыкальная аптечка" поможет вам всегда быть в прекрасной форме 
              и сохранять бодрость духа!
            </p>
          </CardContent>
        </Card>

        <Tabs value={selectedPlaylist} onValueChange={setSelectedPlaylist} className="animate-fade-in">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8 h-auto p-2 bg-card/50 backdrop-blur">
            {playlists.map((playlist) => (
              <TabsTrigger
                key={playlist.id}
                value={playlist.id}
                className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
              >
                <Icon name={playlist.icon as any} size={24} />
                <span className="text-sm font-medium">{playlist.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {playlists.map((playlist) => (
            <TabsContent key={playlist.id} value={playlist.id} className="animate-scale-in">
              <Card className={`border-2 shadow-xl bg-gradient-to-br ${playlist.color} bg-opacity-10`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${playlist.color}`}>
                      <Icon name={playlist.icon as any} size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{playlist.title}</CardTitle>
                      <CardDescription className="text-lg text-foreground/80">
                        {playlist.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-card/80 backdrop-blur p-4 rounded-lg border-2">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Icon name="Stethoscope" size={20} />
                      Терапевтический эффект
                    </h3>
                    <p className="text-foreground/80">{playlist.effect}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-xl flex items-center gap-2">
                      <Icon name="ListMusic" size={24} />
                      Плейлист ({playlist.tracks.length} произведений)
                    </h3>
                    <div className="grid gap-4">
                      {playlist.tracks.map((track, index) => (
                        <Card key={index} className="hover:shadow-lg transition-all border-2 bg-card/90 backdrop-blur">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <Badge className="text-lg px-3 py-1">{index + 1}</Badge>
                                <h4 className="font-medium text-lg">{track.title}</h4>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(track.url, '_blank')}
                                className="gap-2"
                              >
                                <Icon name="ExternalLink" size={16} />
                                YouTube
                              </Button>
                            </div>
                            <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                              <iframe
                                width="100%"
                                height="100%"
                                src={getYouTubeEmbedUrl(track.url)}
                                title={track.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="border-0"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <Card className="mt-8 animate-fade-in border-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Icon name="Mail" size={24} className="text-primary" />
              Контакты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base mb-4">
              Если у вас есть вопросы или предложения по дополнению музыкальной аптечки, 
              свяжитесь с нами через форму обратной связи.
            </p>
            <Button className="gap-2" size="lg">
              <Icon name="Send" size={20} />
              Написать нам
            </Button>
          </CardContent>
        </Card>

        <footer className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            © 2024 Музыкальная аптечка. Берегите своё здоровье с помощью классической музыки
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
